import BlogPost from '@/components/blogs';
import { useRouter } from 'next/router';
import { memo } from 'react';

const index = () => {
const router = useRouter()
   const slug  = router.query;
   console.log(slug)
  return (
    <div>
     <BlogPost value={slug.index} />
    </div>
  );
};

export default memo(index);