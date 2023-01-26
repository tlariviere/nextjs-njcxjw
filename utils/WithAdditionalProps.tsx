const WithAdditionalProps =
  <Props, AdditionalProps>(
    additionalProps: (props: Props) => AdditionalProps,
    Component: React.ComponentType<Props & AdditionalProps>
  ) =>
  (props) =>
    <Component {...props} {...additionalProps(props)} />;

export default WithAdditionalProps;
