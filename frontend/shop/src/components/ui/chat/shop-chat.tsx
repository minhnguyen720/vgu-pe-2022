import { TopicDetail } from "./topic-detail";
import { ChatButtonToggler } from "./chat-button-toggler";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { useWSChat } from "src/contexts/ws-chat.context";
import { useOutsideClickRef } from "src/hooks/useOutsideClickRef";
import ChatTopicList from "./topic-list";
import { motion } from "framer-motion";
import { isLogin } from "@utils/auth-utils";
import Swal from "sweetalert2";
import { firePleaseLoginSwal, getActivePageFromPath } from "@utils/functions";
import router, { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import { PageName } from "@utils/interfaces";

interface INewChatProps {}

const UNMESSAGEABLE = [ROUTES.LOGIN, ROUTES.LOGOUT, ROUTES.SIGNUP];

const ShopChat: React.FC<INewChatProps> = ({ ...props }) => {
  const { t } = useTranslation();
  const { topics = {}, openedTopic, closeFocusTopic } = useWSChat();

  const { pathname, push } = useRouter();
  const activePage = getActivePageFromPath(pathname) as PageName;

  const ref = useOutsideClickRef(hideMessages);
  const [isShowMessages, setIsShowMessages] = useState(false);

  if (UNMESSAGEABLE.includes(`/${activePage}`)) {
    return <></>;
  }

  async function toggleMessages() {
    if (!isLogin()) {
      const { isDenied } = await firePleaseLoginSwal(t, Swal, {
        confirmButton: t("common:stay-button-label"),
      });
      if (isDenied) push(ROUTES.LOGIN);
      return;
    }

    if (isShowMessages) hideMessages();
    if (!isShowMessages) showMessages();
  }

  function hideMessages() {
    closeFocusTopic();
    setIsShowMessages(false);
  }

  function showMessages() {
    setIsShowMessages(true);
  }
  return (
    <div
      className={`fixed bottom-0 left-14 flex items-end space-x-2 z-50`}
      ref={ref}
    >
      <div
        className={`relative rounded-t-sm overflow-hidden w-96 border border-gray-20`}
      >
        <ChatButtonToggler
          unreadTopicsLength={Object.keys(topics).length}
          toggleMessages={toggleMessages}
        />

        {(isShowMessages || !!openedTopic) && (
          <motion.div className={`flex`} animate={{}}>
            <ChatTopicList />
          </motion.div>
        )}
      </div>
      {!!openedTopic && <TopicDetail />}
    </div>
  );
};
export default ShopChat;
