import { useRouter } from 'next/router';

const useUrlHash = (): string | null => {
  const route = useRouter();
  const hash = route.asPath.split('#');

  return hash.length > 1 ? hash[1] : null;
};

export default useUrlHash;
