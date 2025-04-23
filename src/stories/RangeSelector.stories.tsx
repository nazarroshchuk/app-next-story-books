import RangeSelector, {RangeSelectorProps} from "./RangeSelector";
import {fn} from "@storybook/test";

export default {
    title: 'RangeSelector',
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: { onChange: fn() },
    component: RangeSelector,
}

export const Template = (args: RangeSelectorProps) => <RangeSelector {...args} />
