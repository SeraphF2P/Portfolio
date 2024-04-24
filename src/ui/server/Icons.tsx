import {
  BsInfoCircle,
  BsTrash,
  BsUpload,
  BsX,
  BsExclamation,
  BsWhatsapp,
  BsFacebook,
  BsGithub,
  BsSend,
  BsTelegram,
  BsLinkedin,
  BsStar,
  BsGlobe,
  BsHouseExclamation,
  BsGrid3X3GapFill,
  BsBriefcaseFill,
  BsCodeSlash,
  BsAwardFill,
  BsFillHouseFill,
  BsDownload,
  
  
} from "react-icons/bs";

export const Icon = {
  info: BsInfoCircle,
  upload: BsUpload,
  trash: BsTrash,
  X: BsX,
  exclamation: BsExclamation,
  whatsup: BsWhatsapp,
  facebook: BsFacebook,
  github: BsGithub,
  email: BsSend,
  telegram: BsTelegram,
  linkedin: BsLinkedin,
  star: BsStar,
  globe:BsGlobe,
  home:BsFillHouseFill,
projects:BsGrid3X3GapFill ,  
experiances:BsBriefcaseFill ,
skills:BsCodeSlash ,
certifications:BsAwardFill ,
download:BsDownload
};
export type IconName = keyof typeof Icon;
