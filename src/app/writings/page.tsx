import {WritingService} from "@/service/writings/writing.service";
import Writings from "@/components/writing/Writings/Writings";

export default async function WritingsPage() {
  const categories = [
    'All',
    'Machine Learning',
    'Deep Learning',
    'MLOps',
    'NLP',
    'Computer Vision'
  ];

  const writings = await WritingService.createInstance().getWritings();

  const plainWritingObjs = writings.map((writing) => {
    return writing.toPlainObject();
  });

  return <Writings categories={categories} writings={plainWritingObjs} />
}
