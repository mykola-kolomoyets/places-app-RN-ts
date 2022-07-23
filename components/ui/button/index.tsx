import IconButton from "./icon-button";
import Button, {ButtonProps} from "./button";
import {ButtonView} from "../../../utils/enums/button";

const OutlinedButton = (props: Omit<ButtonProps, "view">) => <Button view={ButtonView.outlined} {...props}/>;
const PrimaryButton = (props: Omit<ButtonProps, "view">) => <Button view={ButtonView.primary} {...props}/>;

export default {
	Primary: PrimaryButton,
	Outlined: OutlinedButton,
	Icon: IconButton,
};