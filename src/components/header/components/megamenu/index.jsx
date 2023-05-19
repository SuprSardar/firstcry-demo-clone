import { CN } from "../../../../utilities";

import S from "./index.module.css";

// eslint-disable-next-line react/prop-types
const MegaMenu = ({ children }) => {
  return <section className={CN(S.Mega_Menu, "group-hover:block")}>{children}</section>;
};

export default MegaMenu;
