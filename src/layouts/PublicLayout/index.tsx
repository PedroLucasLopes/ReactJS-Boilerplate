interface IProps {
  children: TChildren;
}

const PublicLayout: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default PublicLayout;
