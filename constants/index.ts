export const navItems = [
    {
        title: "Home",
        path: "/",
        icon: "/assets/icons/home.svg",
    },
    {
        title: "Image Restore",
        path: "/transformations/add/restore",
        icon: "/assets/icons/image.svg",
    },
    {
        title: "Generative Fill",
        path: "/transformations/add/fill",
        icon: "/assets/icons/stars.svg",
    },
    {
        title: "Object Remove",
        path: "/transformations/add/remove",
        icon: "/assets/icons/scan.svg",
    },
    {
        title: "Object Recolor",
        path: "/transformations/add/recolor",
        icon: "/assets/icons/filter.svg",
    },
    {
        title: "Background Remove",
        path: "/transformations/add/removeBackground",
        icon: "/assets/icons/camera.svg"
    },
    {
        title: "Profile",
        path: "/profile",
        icon: "/assets/icons/profile.svg",
    },
    {
        title: "Buy Credits",
        path: "/credits",
        icon: "/assets/icons/bag.svg",
    },
];


export const subscriptionPlans = [
    {
        _id: 1,
        name: "Free",
        icon: "/assets/icons/free-plan.svg",
        price: 0,
        credits: 20,
        inclusions: [
            {
                title: "20 Free Credits",
                isIncluded:true,
            },
            {
                title: "Basic Access to Services",
                isIncluded: true,
            },
            {
                title: "Priority Customer Support",
                isIncluded: false,
            },
            {
                title: "Priority Updates",
                isIncluded: false,
            },
        ],
    },
    {
        _id: 2,
        name: "Pro Package",
        icon: "/assets/icons/free-plan.svg",
        price: 40,
        credits: 120,
        inclusions: [
            {
                title: "120 Credits",
                isIncluded: true,
            },
            {
                title: "Full Access to Services",
                isIncluded: true,
            },
            {
                title: "Priority Customer Support",
                isIncluded: true,
            },
            {
                title: "Priority Updates",
                isIncluded: false,
            },
        ],
    },
    {
        _id: 3,
        name: "Premium Package",
        icon: "/assets/icons/free-plan.svg",
        price: 199,
        credits: 2000,
        inclusions: [
            {
                title: "2000 Credits",
                isIncluded: true,
            },
            {
                title: "Full Access to Services",
                isIncluded: true,
            },
            {
                title: "Priority Customer Support",
                isIncluded: true,
            },
            {
                title: "Priority Updates",
                isIncluded: true,
            },
        ],
    },
];


export const transformationTypes = {
    restore: {
        type: "restore",
        title: "Restore Image",
        subTitle: "Refine images by removing noise & imperfections.",
        config: { restore: true },
        icon: "image.svg",
    },
    removeBackground: {
        type: "removeBackground",
        title: "Background Remove",
        subTitle: "Removes the background of the image using AI.",
        config: { removeBackground: true },
        icon: "camera.svg",
    },
    fill: {
        type: "fill",
        title: "Generative Fill",
        subTitle: "Enhance an image's dimensions using AI outpainting.",
        config: { fillBackground: true },
        icon: "stars.svg",
    },
    remove: {
        type: "remove",
        title: "Object Remove",
        subTitle: "Identify & eliminate objects from images.",
        config: {
            remove: { prompt: "", removeShadow: true, multiple: true },
        },
        icon: "scan.svg",
    },
    recolor: {
        type: "recolor",
        title: "Object Recolor",
        subTitle: "Identify & recolor objects from the image.",
        config: {
            recolor: { prompt: "", to: "", multiple: true },
        },
        icon: "filter.svg",
    },
};


export const aspectRatioOptions = {
    "1:1": {
        aspectRatio: "1:1",
        label: "Square (1:1)",
        width: 1000,
        height: 1000,
    },
    "3:4": {
        aspectRatio: "3:4",
        label: "Standard Portrait (3:4)",
        width: 1000,
        height: 1334,
    },
    "9:16": {
        aspectRatio: "9:16",
        label: "Phone Portrait (9:16)",
        width: 1000,
        height: 1778,
    },
};


export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
};

export const creditFee = -1;