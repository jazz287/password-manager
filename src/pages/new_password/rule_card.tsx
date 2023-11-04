import { Icon, Loader } from "semantic-ui-react";

interface RuleCardProps {
  isDone?: boolean;
  title: string;
}

export default function RuleCard(props: RuleCardProps) {
  return (
    <div>
      {props.isDone ? (
        <Icon name="check circle" color="green"/>
      ) : (
        <Loader active inline size="mini" />
      )}
      &emsp;
      {props.title}
    </div>
  );
}
