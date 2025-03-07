import WritingDetail from '@/components/writing/WritingDetail/WritingDetail';
import { WritingService } from '@/service/writings/writing.service';

const getWritingById = async (slug: string) => {
  const writingService = WritingService.createInstance();

  return await writingService.getWritingById({ id: slug });
};

export default async function WritingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const writing = await getWritingById(id);
  const plainWritingObj = writing.toPlainObject();

  if (!plainWritingObj) {
    //   TOOD: 404 page..
    return;
  }

  return <WritingDetail writing={plainWritingObj} />;
}
