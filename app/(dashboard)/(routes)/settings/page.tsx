import { Settings } from "lucide-react";
import { Heading } from "@/components/heading";

const SettingsPage = () => {
    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings"
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="text-gray-700/10"
            />
        </div>
    )
}

export default SettingsPage;