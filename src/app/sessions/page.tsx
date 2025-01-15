import { Tabs } from "@/components/ui/tabs";
import { TabContentDemo } from "@/components/ui/tabsContent";

export default function Page() {
  return (
    <div className="p-4">
      <Tabs defaultValue="homepage">
        <TabContentDemo />
      </Tabs>
    </div>
  );
}
