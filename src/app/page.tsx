import { Tabs } from "@/components/ui/tabs";
import { TabContentDemo } from "@/components/ui/tabsContent";

export default function Page() {
  return (
    <Tabs defaultValue="homepage">
      <TabContentDemo />
    </Tabs>
  );
}
