import { Meta, StoryObj } from "@storybook/react";
import EmptyCard, { EmptyCardProps } from "./EmptyCard";
import { CardNameProps } from "./core/CardCompany";
import { NumberProps } from "./core/CardNumber";
import { ExpirationDateProps } from "./core/ExpirationDate";
import { NameProps } from "./core/Name";

const meta: Meta<typeof EmptyCard> = {
	component: EmptyCard,
	title: "Card"
};

export default meta;

interface StoryArgs {
	mode: EmptyCardProps["mode"];
	"CardCompany.text": CardNameProps["text"];
	"CardNumber.text": NumberProps["text"];
	"Name.text": NameProps["text"];
	"ExpirationDate.month": ExpirationDateProps["month"];
	"ExpirationDate.year": ExpirationDateProps["year"];
}

type Story = StoryObj<StoryArgs>;

const EmptyCardRender = (args: StoryArgs) => {
	return (
		<EmptyCard mode={args.mode} onClick={() => {}}>
			<EmptyCard.CardCompany text={args["CardCompany.text"]} />
			<EmptyCard.Chip />
			<EmptyCard.CardNumber text={args["CardNumber.text"]} />
			<EmptyCard.Name text={args["Name.text"]} />
			<EmptyCard.ExpirationDate
				month={args["ExpirationDate.month"]}
				year={args["ExpirationDate.year"]}
			/>
		</EmptyCard>
	);
};

export const EmptyCardStory: Story = {
	render: (args) => <EmptyCardRender {...args} />,
	args: {
		mode: "add",
		"CardCompany.text": "",
		"CardNumber.text": "",
		"Name.text": "NAME",
		"ExpirationDate.month": "MM",
		"ExpirationDate.year": "YY"
	},
	argTypes: {
		mode: {
			control: "select",
			options: ["blank", "add"]
		}
	}
};
