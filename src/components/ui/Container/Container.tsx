import styles from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
};

export function Container({ children, className, as = "div", id }: ContainerProps) {
  const Tag = as;
  const classNames = [styles.container, className].filter(Boolean).join(" ");

  return (
    <Tag id={id} className={classNames}>
      {children}
    </Tag>
  );
}
