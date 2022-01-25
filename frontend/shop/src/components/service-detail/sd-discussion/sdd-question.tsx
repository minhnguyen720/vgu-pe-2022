import DiscussionItem from "@components/buying-request-detail/discussion-item";
import Button from "@components/ui/storybook/button";
import TextArea from "@components/ui/storybook/inputs/text-area";
import {
  CreateServiceDiscussionAnswerMutation,
  useCreateServiceDiscussionAnswerMutation,
} from "@graphql/service-discussion.graphql";
import {
  IDiscussionAnswer,
  IServiceDiscussionQuestion,
} from "@graphql/types.graphql";
import { getCompanyName, getLoggedInUser } from "@utils/functions";
import { useTranslation } from "next-i18next";
import React, { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

interface ISDDiscussionQuestionProps {
  discussionQuestion: IServiceDiscussionQuestion;
}

const SDDiscussionQuestion: React.FC<ISDDiscussionQuestionProps> = ({
  discussionQuestion,
}) => {
  const { user, companyName, question, createdAt } = discussionQuestion;

  const { t } = useTranslation();

  const [answers, setAnswers] = useState([
    ...(discussionQuestion.answers || []),
  ]);

  const [isReplying, setIsReplying] = useState(false);
  const [answer, setAnswer] = useState("");
  const [answerError, setAnswerError] = useState("");

  const [replyQuestion] = useCreateServiceDiscussionAnswerMutation({
    onCompleted: handleReplied,
  });
  function handleReplied({
    createServiceDiscussionAnswer: { message, success },
  }: CreateServiceDiscussionAnswerMutation) {
    if (success)
      Swal.fire({
        icon: "success",
        title: t("answer-submission-success"),
      });
    else if (!success)
      Swal.fire({
        icon: "error",
        title: t(`answer-${message}-error`),
      });
  }

  function handleReplyClick() {
    setIsReplying(true);
  }

  function handleCancelReplyClick() {
    setIsReplying(false);
    setAnswerError("");
  }

  function generateAnswerForUI() {
    const newAnswer: IDiscussionAnswer = {
      answer,
      companyName: getCompanyName()!,
      createdAt: new Date(),
      user: getLoggedInUser()!,
    };

    answers?.push(newAnswer);
    setAnswers([...answers]);
  }

  function handleSendReplyClick() {
    generateAnswerForUI();
    setIsReplying(false);
    if (!answer) {
      setAnswerError(t("answer-empty-error"));
      return;
    }

    replyQuestion({
      variables: {
        input: {
          answer,
          companyName: getCompanyName()!,
          serviceDiscussionQuestionId: discussionQuestion.id,
          userId: getLoggedInUser()?.id!,
        },
      },
    });
  }

  function handleAnswerChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAnswerError("");
    setAnswer(e.target.value);
  }

  return (
    <div className="py-1 my-2">
      <DiscussionItem
        user={user}
        companyName={companyName}
        text={question}
        createdAt={createdAt}
      />

      <div className="ml-4 mt-3">
        {answers?.map(({ answer, user, companyName, createdAt }) => {
          return (
            <div key={user.id + companyName + answer}>
              <DiscussionItem
                user={user}
                companyName={companyName}
                createdAt={createdAt}
                text={answer!}
              />
            </div>
          );
        })}
        <div className={`mt-1`}>
          {isReplying ? (
            <div className={`flex flex-col`}>
              <TextArea
                onChange={handleAnswerChange}
                placeholder={t("question-answer-input-placeholder")}
                error={answerError}
                autoFocus
              />
              <div className={`fic space-x-2 justify-end`}>
                <Button onClick={handleCancelReplyClick} variant="cancel">
                  {t("cancel-text")}
                </Button>
                <Button onClick={handleSendReplyClick}>
                  {t("reply-text")}
                </Button>
              </div>
            </div>
          ) : (
            <Button
              onClick={handleReplyClick}
              className="text-primary border border-black"
              variant="custom"
            >
              {t("reply-text")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default SDDiscussionQuestion;
