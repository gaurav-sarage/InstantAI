import { Settings } from "lucide-react";
import { Heading } from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {

    const isPro = await checkSubscription();

    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings"
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="text-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {
                        isPro ? 
                        "You are currently on a pro plan" : 
                        "You are currently on a free plan"
                    }
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;