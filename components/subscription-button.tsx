"use client";

import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtonProps {
    isPro: boolean;
};

export const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonProps) => {

    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        try {
            setLoading(true)
            const response = await axios.get("/api/stripe")

            window.location.href = response.data.url;
        } catch (error){
            toast.error("Something went wrong :(");           
        } finally {
            setLoading(false);
        }
    }

    return (
        <Button
            disabled
            variant={isPro ? "default" : "premium"}
            onClick={onClick}
        >
            {isPro ? "Manage your subscription" : "Upgrade to pro"}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white"/>}
        </Button>
    )
}