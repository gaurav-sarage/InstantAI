import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export const UserAvatar = () => {
    const { user } = useUser();

    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src={user?.profileImageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    );
};

