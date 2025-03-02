import {WritingService} from "@/service/writings/writing.service";
import Writings from "@/components/writing/Writings/Writings";

export default async function WritingsPage() {
  const writings = await WritingService.createInstance().getWritings();

  const plainWritingObjs = writings.map((writing) => {
    return writing.toPlainObject();
  });

  return <Writings writings={plainWritingObjs} />
}
