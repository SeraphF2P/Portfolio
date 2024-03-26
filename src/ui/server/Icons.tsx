import {
	BsInfoCircle,
	BsTrash,
	BsUpload,
	BsX,
	BsExclamation,
  BsWhatsapp
} from "react-icons/bs";

export const Icon = {
	info: BsInfoCircle,
	upload: BsUpload,
	trash: BsTrash,
	X: BsX,
	exclamation: BsExclamation,
  whatsup:BsWhatsapp

};
export type IconName = keyof typeof Icon;
