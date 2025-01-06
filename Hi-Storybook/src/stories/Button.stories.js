import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "clicked" },
  },
};

// 기본 스토리
export const Primary = {
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "md",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    size: "md",
  },
  //   render: (args) => <Button {...args} />,
  //   이런 식으로 render 함수로 jsx를 사용할 수도 있음.
  //   render에 쓰는건 사용자가 선택하지 못하게 하려는 것만
};

export const Small = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};
