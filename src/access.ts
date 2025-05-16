/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    // @ts-ignore
    canAdmin: currentUser && currentUser.userRole === 1,
  };
}
