
/* Use the following method if you are not explicitly defining the environment 
and instead retrieving your variables from the system's environment. */
export const useSystemEnv = () => {
  const data = {
    base_url: process.env.BASE_URL,
  };
  return useState(() => data);
};
