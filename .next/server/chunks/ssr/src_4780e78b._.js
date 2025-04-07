module.exports = {

"[project]/src/hooks/useImageNavigation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useImageNavigation": (()=>useImageNavigation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useImageNavigation() {
    // Desktop states
    const [firstImgVisible, setFirstImgVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [secondImgVisible, setSecondImgVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thirdImgVisible, setThirdImgVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [firstImageDelay, setFirstImageDelay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [randomX, setRandomX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [randomY, setRandomY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mobile states
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentMobileImage, setCurrentMobileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mobileRandomX, setMobileRandomX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobileRandomY, setMobileRandomY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Track if about section is active for mobile visibility
    const [isAboutActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if device is mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Desktop hover functionality
    function onHoverChange(imageNumber) {
        if (imageNumber === 1) {
            setFirstImgVisible(false);
            setSecondImgVisible(true);
            setThirdImgVisible(false);
        } else if (imageNumber === 2) {
            setFirstImgVisible(false);
            setSecondImgVisible(false);
            setThirdImgVisible(true);
        } else {
            setFirstImgVisible(true);
            setSecondImgVisible(false);
            setThirdImgVisible(false);
        }
    }
    // Generate random positions for mobile
    const generateMobileRandomPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const currentImageNum = currentMobileImage || 1;
        // Approximate image width based on the current image
        const estimatedImgWidth = currentImageNum === 3 ? window.innerWidth * 0.6 : window.innerWidth * 0.5;
        // Approximate image height
        const estimatedImgHeight = estimatedImgWidth * 0.75;
        // Calculate maximum possible position values
        const maxX = Math.max(window.innerWidth - estimatedImgWidth, 0);
        // Set usable vertical space
        const navbarHeight = 80;
        const usableHeight = window.innerHeight - navbarHeight;
        // Allow images to appear higher up
        const topOffset = 100;
        const minY = Math.min(topOffset, usableHeight * 0.3);
        const maxY = Math.max(usableHeight - estimatedImgHeight, 0);
        // Generate random positions within boundaries
        const paddingX = 10;
        const randomXPos = Math.random() * Math.max(maxX - paddingX, 0);
        const randomYPos = Math.random() * (maxY + minY) - minY;
        setMobileRandomX(randomXPos);
        setMobileRandomY(randomYPos);
    }, [
        currentMobileImage
    ]);
    // Auto-rotate images on mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Use isAboutActive instead of firstImgVisible for mobile
        if (!isMobile || !isAboutActive || isExiting) return;
        // Initial random position
        generateMobileRandomPosition();
        const interval = setInterval(()=>{
            setCurrentMobileImage((prev)=>prev === 3 ? 1 : prev + 1);
            // Generate new random position each time image changes
            generateMobileRandomPosition();
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        isMobile,
        isAboutActive,
        isExiting,
        generateMobileRandomPosition
    ]);
    // Get visibility for mobile images
    const getMobileVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((imageNum)=>{
        if (!isMobile) return false;
        // Use isAboutActive instead of firstImgVisible
        return isAboutActive && currentMobileImage === imageNum;
    }, [
        isMobile,
        isAboutActive,
        currentMobileImage
    ]);
    // Desktop random position generation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateRandomPosition = ()=>{
            const maxX = Math.max(window.innerWidth * 0.7, 0) + 100;
            const maxY = Math.max(window.innerHeight * 0.5, 0) - 600;
            const newRandomX = Math.random() * maxX;
            const newRandomY = Math.random() * maxY;
            setRandomX(newRandomX);
            setRandomY(newRandomY);
        };
        updateRandomPosition();
        window.addEventListener("resize", updateRandomPosition);
        return ()=>window.removeEventListener("resize", updateRandomPosition);
    }, [
        firstImgVisible,
        secondImgVisible,
        thirdImgVisible
    ]);
    // Handle about section toggling
    const handleAboutToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((isAboutClicked)=>{
        if (isAboutClicked) {
            setFirstImgVisible(true);
            setIsExiting(false);
        } else {
            setIsExiting(true);
            const timer = setTimeout(()=>{
                setFirstImgVisible(false);
                setSecondImgVisible(false);
                setThirdImgVisible(false);
                setIsExiting(false);
            }, 700);
            return ()=>clearTimeout(timer);
        }
    }, []);
    return {
        // Desktop states
        firstImgVisible,
        secondImgVisible,
        thirdImgVisible,
        firstImageDelay,
        setFirstImageDelay,
        isExiting,
        randomX,
        randomY,
        onHoverChange,
        handleAboutToggle,
        // Mobile states and functions
        isMobile,
        currentMobileImage,
        mobileRandomX,
        mobileRandomY,
        getMobileVisibility
    };
}
}}),
"[project]/src/hooks/useNavigation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useNavigation": (()=>useNavigation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useNavigation() {
    const [isAboutClicked, setIsAboutClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreativesClicked, setIsCreativesClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProjectsClicked, setIsProjectsClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [justifyProp, setJustifyProp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("justify-between");
    const [isDisabled, setIsDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasScrolledToProjects, setHasScrolledToProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Function reference for resetting project index
    const [resetProjectIndexFn, setResetProjectIndexFn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleProjectsClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isDisabled) return;
        setIsDisabled(true);
        setTimeout(()=>setIsDisabled(false), 700);
        // Reset other states first
        setIsAboutClicked(false);
        setIsCreativesClicked(false);
        if (!isProjectsClicked) {
            setIsProjectsClicked(true);
            setTimeout(()=>{
                setJustifyProp("justify-end");
            }, 700);
        } else {
            setIsProjectsClicked(false);
            setHasScrolledToProjects(false);
            setJustifyProp("justify-between");
        }
    }, [
        isDisabled,
        isProjectsClicked,
        setJustifyProp
    ]);
    // Keep track of wheel handler state to avoid stale closures
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        isAboutClicked,
        isCreativesClicked,
        isProjectsClicked,
        hasScrolledToProjects
    });
    // Update ref when state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        stateRef.current = {
            isAboutClicked,
            isCreativesClicked,
            isProjectsClicked,
            hasScrolledToProjects
        };
    }, [
        isAboutClicked,
        isCreativesClicked,
        isProjectsClicked,
        hasScrolledToProjects
    ]);
    // Register reset function
    const registerResetProjectIndex = (fn)=>{
        setResetProjectIndexFn(()=>fn);
    };
    // Handle wheel event to activate projects
    const handleWheelEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const state = stateRef.current;
        // Only trigger on downward wheel movement (positive deltaY)
        // and only if no navigation has been clicked yet
        if (!state.hasScrolledToProjects && !state.isAboutClicked && !state.isCreativesClicked && !state.isProjectsClicked && e.deltaY > 50) {
            e.preventDefault();
            setHasScrolledToProjects(true);
            // First ensure project index is reset to 0
            if (resetProjectIndexFn) {
                resetProjectIndexFn();
            }
            // Then activate projects view
            handleProjectsClick();
        }
    }, [
        handleProjectsClick,
        resetProjectIndexFn
    ]);
    // Set up the wheel event listener only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener("wheel", handleWheelEvent, {
            passive: false
        });
        return ()=>window.removeEventListener("wheel", handleWheelEvent);
    }, [
        handleWheelEvent
    ]);
    function handleLogoClick() {
        window.location.reload();
    }
    function handleAboutClick() {
        if (isDisabled) return;
        setIsDisabled(true);
        setTimeout(()=>setIsDisabled(false), 700);
        // Reset other states first
        setIsCreativesClicked(false);
        setIsProjectsClicked(false);
        setJustifyProp("justify-between");
        if (!isAboutClicked) {
            setIsAboutClicked(true);
            return true; // Signal that About was turned on
        } else {
            setIsAboutClicked(false);
            return false; // Signal that About was turned off
        }
    }
    function handleCreativesClick() {
        if (isDisabled) return;
        setIsDisabled(true);
        setTimeout(()=>setIsDisabled(false), 700);
        // Reset other states first
        setIsAboutClicked(false);
        setIsProjectsClicked(false);
        if (!isCreativesClicked) {
            setIsCreativesClicked(true);
            setTimeout(()=>{
                setJustifyProp("justify-center");
            }, 700);
        } else {
            setIsCreativesClicked(false);
            setJustifyProp("justify-between");
        }
    }
    return {
        isAboutClicked,
        isCreativesClicked,
        isProjectsClicked,
        justifyProp,
        handleLogoClick,
        handleAboutClick,
        handleCreativesClick,
        handleProjectsClick,
        hasScrolledToProjects,
        registerResetProjectIndex
    };
}
}}),
"[project]/src/components/ui/Homepage/projects/ProjectItems.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "projects": (()=>projects)
});
const projects = [
    {
        name: "Project 1",
        info: "Made with love",
        backgroundImage: "/cinematic1.jpg"
    },
    {
        name: "Project 2",
        info: "Made with fist",
        backgroundImage: "/cinematic2.jpg"
    },
    {
        name: "Seventyfour: Silver",
        info: "Jewelry Project",
        backgroundImage: "/seventyfour_silver.jpg"
    },
    {
        name: "Seventyfour: Begin",
        info: "Establishment of Seventyfour\nMAY 2024",
        backgroundImage: "/74-begin-gif.gif"
    }
];
}}),
"[project]/src/components/ui/Homepage/creatives/CreativeItems.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "creatives": (()=>creatives)
});
const creatives = [
    {
        name: "T. Tung Mai",
        info: "[tungous.com](https://tungous.com)\nart director\ndp\neditor",
        backgroundImage: "/tung.jpg"
    },
    {
        name: "Leo Pham",
        info: "[leophamie.eu](https://leophamie.eu)\ngraphic designer\nmultimedia designer",
        backgroundImage: "/leo.jpg"
    },
    {
        name: "Tomas Nguyen",
        info: "web developer\nmusic producer",
        backgroundImage: "/quang_thanh.jpg"
    },
    {
        name: "Lexa Pham",
        info: "director\ndp\neditor",
        backgroundImage: "/lexa.jpg"
    },
    {
        name: "Minh Viet Pham",
        info: "\nart director\nphotographer\ndp",
        backgroundImage: "/viet.jpg"
    },
    {
        name: "BAZO",
        info: "DJ\nmultimedia designer",
        backgroundImage: "/bazo.jpg"
    },
    {
        name: "David Pham",
        info: "DJ\nsound enginner",
        backgroundImage: "/david.jpg"
    },
    {
        name: "Čongus",
        info: "Tung lover\nmultimedia designer",
        backgroundImage: "/congus.jpeg"
    }
];
}}),
"[project]/src/hooks/useContentScroll.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useContentScroll": (()=>useContentScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/ProjectItems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/creatives/CreativeItems.tsx [app-ssr] (ecmascript)");
;
;
;
function useContentScroll(isProjectsClicked, isCreativesClicked, isAboutClicked, onNavigate, isMobileMenuOpen) {
    const [, setIsBackgroundBlurred] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentProjectIndex, setCurrentProjectIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentProject, setCurrentProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][0]);
    const [currentCreativeIndex, setCurrentCreativeIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentCreative, setCurrentCreative] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["creatives"][0]);
    const [isScrolling, setIsScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStartY, setTouchStartY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isImagePushedDown, setIsImagePushedDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset blur state on content change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsBackgroundBlurred(false);
    }, [
        currentProjectIndex,
        currentCreativeIndex
    ]);
    // Update current content when index changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentProject(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][currentProjectIndex]);
    }, [
        currentProjectIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentCreative(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["creatives"][currentCreativeIndex]);
    }, [
        currentCreativeIndex
    ]);
    // Main page scrolling effect - wheel events (desktop)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only active when we're on the main page (no sections clicked)
        if (isProjectsClicked || isCreativesClicked || isAboutClicked || !onNavigate || isMobileMenuOpen) return;
        const handleWheel = (e)=>{
            e.preventDefault();
            if (isScrolling) return;
            setIsScrolling(true);
            // Navigate based on scroll direction
            if (e.deltaY > 0) {
                // Scrolled down - go to Projects
                onNavigate("projects");
            } else {
                // Scrolled up - go to Creatives
                onNavigate("creatives");
            }
            setTimeout(()=>{
                setIsScrolling(false);
            }, 1500);
        };
        window.addEventListener("wheel", handleWheel, {
            passive: false
        });
        return ()=>{
            window.removeEventListener("wheel", handleWheel);
        };
    }, [
        isProjectsClicked,
        isCreativesClicked,
        isAboutClicked,
        isScrolling,
        onNavigate,
        isMobileMenuOpen
    ]);
    // Main page scrolling effect - touch events (mobile)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only active when we're on the main page
        if (isProjectsClicked || isCreativesClicked || isAboutClicked || !onNavigate || isMobileMenuOpen) return;
        const handleTouchStart = (e)=>{
            setTouchStartY(e.touches[0].clientY);
        };
        const handleTouchMove = (e)=>{
            // Prevent default to disable browser's native scrolling
            e.preventDefault();
        };
        const handleTouchEnd = (e)=>{
            if (touchStartY === null || isScrolling) return;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;
            // Only proceed if the swipe is significant enough
            if (Math.abs(deltaY) < 50) return;
            setIsScrolling(true);
            // Navigate based on swipe direction
            if (deltaY > 0) {
                // Swiped up - go to Projects
                onNavigate("projects");
            } else {
                // Swiped down - go to Creatives
                onNavigate("creatives");
            }
            setTimeout(()=>{
                setIsScrolling(false);
            }, 1500);
        };
        window.addEventListener("touchstart", handleTouchStart, {
            passive: false
        });
        window.addEventListener("touchmove", handleTouchMove, {
            passive: false
        });
        window.addEventListener("touchend", handleTouchEnd, {
            passive: false
        });
        return ()=>{
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [
        isProjectsClicked,
        isCreativesClicked,
        isAboutClicked,
        isScrolling,
        touchStartY,
        onNavigate,
        isMobileMenuOpen
    ]);
    // Reset pushed down state when projects section is toggled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsImagePushedDown(false);
    }, [
        isProjectsClicked
    ]);
    return {
        setIsBackgroundBlurred,
        currentProjectIndex,
        currentProject,
        currentCreativeIndex,
        currentCreative,
        setCurrentCreativeIndex,
        setCurrentProjectIndex,
        isImagePushedDown,
        setIsImagePushedDown
    };
}
}}),
"[project]/src/components/ui/Homepage/creatives/CreativeCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreativeCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
function CreativeCard({ currentCreativeIndex, backgroundImage, isBlurred }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0.5,
            filter: "blur(50px) brightness(2)"
        },
        animate: {
            opacity: 1,
            filter: isBlurred ? "blur(30px) brightness(1.3)" : "blur(0px) brightness(1)"
        },
        exit: {
            opacity: 0,
            filter: "blur(100px) brightness(2)"
        },
        transition: {
            duration: 1.3,
            filter: {
                duration: 1.3
            }
        },
        className: "fixed min-h-screen z-2 w-full pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: backgroundImage,
            fill: true,
            alt: "Creative image background",
            className: "object-cover pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Homepage/creatives/CreativeCard.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, currentCreativeIndex, false, {
        fileName: "[project]/src/components/ui/Homepage/creatives/CreativeCard.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/Homepage/creatives/CreativeInfo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreativeInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function CreativeInfo({ currentCreativeIndex, info, onHoverChange }) {
    const processText = (text)=>{
        const linkPattern = /\[(.*?)\]\((.*?)\)/g;
        if (linkPattern.test(text)) {
            linkPattern.lastIndex = 0;
            const match = linkPattern.exec(text);
            if (match) {
                const linkText = match[1];
                const linkUrl = match[2];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: linkUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "italic hover:opacity-80 transition-opacity",
                    onMouseEnter: ()=>onHoverChange(true),
                    onMouseLeave: ()=>onHoverChange(false),
                    children: linkText
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/creatives/CreativeInfo.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this);
            }
        }
        return text;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            fontWeight: 700,
            filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
        },
        animate: {
            opacity: 1,
            fontWeight: 700,
            filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
        },
        exit: {
            opacity: 0,
            fontWeight: 700,
            filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
        },
        transition: {
            duration: 0.7
        },
        className: "text-white flex flex-col justify-center items-center z-50 h-screen w-screen fixed lg:text-xs text-[10px] cursor-pointer uppercase tracking-tight pointer-events-none",
        style: {
            textShadow: "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
            touchAction: "none",
            userSelect: "none",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-left pointer-events-auto",
            children: info.split("\n").map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:py-2 py-1",
                    children: processText(line)
                }, index, false, {
                    fileName: "[project]/src/components/ui/Homepage/creatives/CreativeInfo.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Homepage/creatives/CreativeInfo.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, `project-info-${currentCreativeIndex}`, false, {
        fileName: "[project]/src/components/ui/Homepage/creatives/CreativeInfo.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/Homepage/creatives/Creative.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Creative": (()=>Creative)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/creatives/CreativeItems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/creatives/CreativeCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/creatives/CreativeInfo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Creative = ({ isCreativesClicked, currentCreativeIndex, currentCreative, setIsBackgroundBlurred, isMobileMenuOpen = false })=>{
    const [isBlurred, setIsBlurred] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleHoverChange = (hovered)=>{
        setIsBlurred(hovered);
        setIsBackgroundBlurred(hovered);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: isCreativesClicked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    currentCreativeIndex: currentCreativeIndex,
                    backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["creatives"][currentCreativeIndex % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["creatives"].length].backgroundImage,
                    isBlurred: isBlurred
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/creatives/Creative.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/creatives/Creative.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isCreativesClicked && !isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    currentCreativeIndex: currentCreativeIndex,
                    info: currentCreative.info,
                    onHoverChange: handleHoverChange
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/creatives/Creative.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/creatives/Creative.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Homepage/creatives/Creative.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/Homepage/projects/ProjectCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
// Create a motion version of Next.js Image component
const MotionImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function ProjectCard({ currentProjectIndex, backgroundImage, isBlurred, onClick, isPushedDown, setIsPushedDown }) {
    // Use a global event listener for clicks instead of relying on component click events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClick = (e)=>{
            const target = e.target;
            // Check if click is on element with logo data attribute
            if (target.closest('[data-logo-element="true"]')) {
                return; // Exit early for logo clicks
            }
            // More comprehensive logo detection
            // Check for logo SVG, image with logo in path or alt text
            const isLogoElement = (element)=>{
                if (!element) return false;
                // Check for image elements with logo in src or alt
                if (element.tagName === "IMG") {
                    const img = element;
                    const src = img.src || "";
                    const alt = img.alt || "";
                    if (src.includes("logo") || alt.toLowerCase().includes("logo") || alt.toLowerCase().includes("seventyfour") || src.includes("/logo.svg")) {
                        return true;
                    }
                }
                // Check if it's part of a logo component by checking parent elements
                const parent = element.parentElement;
                if (parent && parent.getAttribute("data-testid") === "logo" || parent && parent.className.includes("logo")) {
                    return true;
                }
                return false;
            };
            // Check if the clicked element or any of its parents is a logo
            let currentElement = target;
            while(currentElement){
                if (isLogoElement(currentElement)) {
                    return; // Exit early if it's a logo element
                }
                currentElement = currentElement.parentElement;
            }
            // Simplified UI element check
            const isUIElement = target.closest("button, nav, li, .pointer-events-auto");
            // Check if clicking on black details area when pushed down
            const isDetailArea = target.closest("#scrollable-project-details");
            // If not clicking on UI elements or details area
            if (!isUIElement && !isDetailArea) {
                const viewportHeight = window.innerHeight;
                const absoluteClickY = e.pageY; // This gives us the click position including scroll
                // When not pushed down, check central area
                if (!isPushedDown) {
                    const inCentralArea = e.clientY > viewportHeight * 0.25 && e.clientY < viewportHeight * 0.75;
                    if (inCentralArea) {
                        setIsPushedDown(true);
                        if (onClick) onClick();
                    }
                } else {
                    // When pushed down, check if click is in the visible portion of the image
                    // Subtract 150px only when pushed down to account for the shift
                    const maxClickHeight = isPushedDown ? viewportHeight - 150 : viewportHeight;
                    const isInVisibleImageArea = absoluteClickY < maxClickHeight;
                    if (isInVisibleImageArea) {
                        setIsPushedDown(false);
                        if (onClick) onClick();
                    }
                }
            }
        };
        window.addEventListener("click", handleClick);
        return ()=>window.removeEventListener("click", handleClick);
    }, [
        onClick,
        isPushedDown,
        setIsPushedDown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            "data-project-index": currentProjectIndex,
            initial: {
                opacity: 0.5,
                filter: "blur(50px) brightness(2)"
            },
            animate: {
                opacity: 1,
                filter: isBlurred ? "blur(30px) brightness(1.3)" : "blur(0px) brightness(1)"
            },
            exit: {
                opacity: 0,
                filter: "blur(100px) brightness(2)"
            },
            transition: {
                duration: 1.3,
                filter: {
                    duration: 1.3
                }
            },
            className: `absolute min-h-screen z-2 w-full`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionImage, {
                src: backgroundImage,
                fill: true,
                alt: "Project image background",
                className: "object-cover z-2 cursor-pointer",
                animate: {
                    filter: "blur(0px) brightness(1)"
                },
                transition: {
                    filter: {
                        duration: 0.3
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/projects/ProjectCard.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this)
        }, currentProjectIndex, false, {
            fileName: "[project]/src/components/ui/Homepage/projects/ProjectCard.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),
"[project]/src/components/ui/Homepage/projects/ProjectInfo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function ProjectInfo({ currentProjectIndex, info, onClick, onHoverChange }) {
    // Function to process text that might contain link indicators
    const processText = (text)=>{
        const linkPattern = /\[(.*?)\]\((.*?)\)/g;
        if (linkPattern.test(text)) {
            linkPattern.lastIndex = 0;
            const match = linkPattern.exec(text);
            if (match) {
                const linkText = match[1];
                const linkUrl = match[2];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: linkUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "italic hover:opacity-80 transition-opacity",
                    onClick: (e)=>{
                        e.stopPropagation();
                    },
                    onMouseEnter: ()=>onHoverChange(false),
                    onMouseLeave: ()=>onHoverChange(false),
                    children: linkText
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectInfo.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this);
            }
        }
        return text;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            fontWeight: 700,
            filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
        },
        animate: {
            opacity: 1,
            fontWeight: 700,
            filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
        },
        exit: {
            opacity: 0,
            fontWeight: 700,
            filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
        },
        transition: {
            duration: 1.3
        },
        className: "absolute text-white flex flex-col justify-center items-center z-10 h-screen w-screen lg:text-xs text-[10px] uppercase tracking-tight",
        style: {
            textShadow: "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
            touchAction: "none",
            userSelect: "none",
            overflow: "hidden",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-left cursor-pointer pointer-events-auto",
            onClick: onClick,
            onMouseEnter: ()=>onHoverChange(true),
            onMouseLeave: ()=>onHoverChange(false),
            children: info.split("\n").map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:py-2 py-1",
                    children: processText(line)
                }, index, false, {
                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectInfo.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Homepage/projects/ProjectInfo.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, `project-info-${currentProjectIndex}`, false, {
        fileName: "[project]/src/components/ui/Homepage/projects/ProjectInfo.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
;
const variants = {
    Project1: "grid grid-cols-1 grid-rows-1 gap-4 w-full",
    Project2: "grid grid-cols-2 gap-8 w-full",
    Project3: "flex flex-col space-y-6 w-full",
    Project4: "grid grid-cols-1 grid-rows-1 gap-4 w-full",
    Project5: "flex flex-row space-x-8 w-full",
    Project6: "grid grid-cols-2 gap-12 w-full"
};
const DetailLayout = ({ children, isPushedDown, variant })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 0,
            opacity: 0,
            filter: "blur(100px) brightness(2)"
        },
        animate: {
            y: isPushedDown ? -150 : 0,
            opacity: isPushedDown ? 1 : 0,
            filter: isPushedDown ? "blur(0px) brightness(1)" : "blur(100px) brightness(1)"
        },
        exit: {
            y: 0,
            opacity: 0,
            filter: isPushedDown ? "blur(10px) brightness(1)" : "blur(100px) brightness(1)"
        },
        transition: {
            duration: 0.7,
            y: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        className: "absolute w-full",
        style: {
            zIndex: 3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-full z-2",
                style: {
                    top: "calc(100vh - 200px)",
                    height: "200px",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,1) 100%)",
                    pointerEvents: "none",
                    opacity: isPushedDown ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[calc(100vh)] flex flex-col justify-start items-center w-full z-2 min-h-screen pt-20 pb-60 bg-black tracking-tight",
                id: "scrollable-project-details",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(child) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                        variant
                    }) : child)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
// Project content component
const ProjectContent = ({ children, className, variant })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(variants[variant], className),
        style: {
            textShadow: "0px 0px 6px rgba(255, 255, 255, 1)"
        },
        initial: {
            y: 0,
            opacity: 0,
            filter: "blur(100px) brightness(2)"
        },
        animate: {
            y: 0,
            opacity: 1,
            filter: "blur(0px) brightness(1)"
        },
        exit: {
            y: 0,
            opacity: 0,
            filter: "blur(100px) brightness(1)"
        },
        transition: {
            duration: 1.3,
            delay: 0.2,
            ease: "easeOut"
        },
        children: children
    }, variant, false, {
        fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
};
// Image component
const DetailImage = ({ src, alt = "", className, fill = true, sizes = "100vw", priority = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative aspect-[16/9] w-full overflow-hidden", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: alt,
                fill: fill,
                sizes: sizes,
                className: "object-cover",
                priority: priority
            }, void 0, false, {
                fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    boxShadow: "inset 0 0px 15px 15px black",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
};
// Video component
const Video = ({ src, className })=>{
    // Check if the source is a Vimeo URL
    const isVimeoUrl = typeof src === "string" && src.includes("vimeo.com");
    if (isVimeoUrl) {
        // Extract the Vimeo ID from the URL
        const vimeoId = src.split("/").pop();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative aspect-[16/9] w-full overflow-hidden", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: `https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=1&title=0&byline=0&portrait=0`,
                className: "w-full h-full absolute top-0 left-0",
                frameBorder: "0",
                allow: "autoplay; fullscreen; picture-in-picture",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this);
    }
    // Regular video file
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative aspect-[16/9] w-full overflow-hidden", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            src: src,
            className: "w-full h-full object-cover",
            controls: true,
            muted: true
        }, void 0, false, {
            fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
            lineNumber: 216,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
};
// Text component
const Text = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx",
        lineNumber: 223,
        columnNumber: 10
    }, this);
};
// Attach components as static properties
DetailLayout.ProjectContent = ProjectContent;
DetailLayout.Image = DetailImage;
DetailLayout.Video = Video;
DetailLayout.Text = Text;
const __TURBOPACK__default__export__ = DetailLayout;
}}),
"[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectDetail": (()=>ProjectDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/core/DetailLayout/DetailLayout.tsx [app-ssr] (ecmascript)");
;
;
// Project data mapping
const projectData = [
    {
        id: 1,
        title: "Project 1",
        description: "A beautiful and innovative project showcasing modern design principles.",
        variant: "Project1",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ]
    },
    {
        id: 2,
        title: "Project 2",
        description: "An exploration of interactive experiences and user engagement.",
        variant: "Project2"
    },
    {
        id: 3,
        title: "Project 3",
        description: "A showcase of cutting-edge technology and seamless integration.",
        variant: "Project3"
    },
    {
        id: 4,
        title: "Project 4",
        description: "A journey through time, blending past and present in perfect harmony.",
        variant: "Project4"
    },
    {
        id: 5,
        title: "Project 5",
        description: "Pushing boundaries with innovative solutions and creative thinking.",
        variant: "Project5"
    },
    {
        id: 6,
        title: "Project 6",
        description: "A masterpiece of design and functionality working in perfect sync.",
        variant: "Project6"
    }
];
const ProjectDetail = ({ isPushedDown, currentProjectIndex })=>{
    const project = projectData[currentProjectIndex % projectData.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        currentProjectIndex: currentProjectIndex,
        isPushedDown: isPushedDown,
        variant: project.variant,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ProjectContent, {
            variant: project.variant,
            children: [
                project.variant === "Project1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                                    src: "/bazo.jpg",
                                    alt: "Project 1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-center items-center p-8  lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-md ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "w-full",
                                            style: {
                                                textShadow: "0px 0px 2px rgba(255,255,255,1)"
                                            },
                                            children: [
                                                project.title,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this),
                                                project.description
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                                src: "/nostalgia.gif",
                                alt: "Project 1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                project.variant === "Project2" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                                src: "/nostalgia.gif",
                                alt: "Project 2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Video, {
                                src: "https://vimeo.com/958547140",
                                alt: "Project 2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                project.variant === "Project3" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                            src: "/cinematic2.jpg",
                            alt: "Project 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                            src: "/cinematic3.jpg",
                            alt: "Project 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                            src: "/home.jpeg",
                            alt: "Project 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                project.variant === "Project4" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                                    src: "/seventyfour_begin_1.jpg",
                                    alt: "Project 1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-center items-center p-8 mix-blend-difference lg:text-xs text-[8px] uppercase font-bold text-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "w-full",
                                            style: {
                                                textShadow: "0px 0px 2px rgba(255,255,255,1)"
                                            },
                                            children: [
                                                "DIRECTOR, DP, EDITOR: T. TUNG MAI",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this),
                                                "DESIGNER: LEO PHAM",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                "SOUND: TOMAS NGUYEN"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Video, {
                                src: "https://vimeo.com/957811693",
                                alt: "Project 1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                                    src: "/seventyfour-begin-21.jpg",
                                    alt: "Project 1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-center items-center lg:px-16 px-2 mix-blend-difference lg:text-xs text-[8px] uppercase font-bold text-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-justify",
                                            style: {
                                                textShadow: "0px 0px 2px rgba(255,255,255,1)"
                                            },
                                            children: [
                                                "DIRECTOR, DP, EDITOR: T. TUNG MAI",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                "DESIGNER: LEO PHAM",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this),
                                                "SOUND: TOMAS NGUYEN",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this),
                                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nihil laboriosam nam sequi dolores nobis atque minima id optio. Cumque labore laudantium aliquid vel iusto quo deleniti, repellat ratione assumenda quasi quaerat, rerum exercitationem? Adipisci, assumenda eius sapiente impedit ratione dolorum quae ipsam minima nemo doloremque labore aspernatur consequuntur alias exercitationem. Quas quod mollitia hic adipisci consequatur iste aperiam id praesentium quasi quisquam."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                project.variant === "Project5" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                            src: "/viet.jpg",
                            alt: "Project 5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Video, {
                            src: "/viet2.jpg",
                            alt: "Project 5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                            src: "/tung.jpg",
                            alt: "Project 5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                project.variant === "Project6" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                            src: "/quang_thanh.jpg",
                            alt: "Project 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$DetailLayout$2f$DetailLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Image, {
                            src: "/leo.jpg",
                            alt: "Project 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/Homepage/projects/Project.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Project": (()=>Project)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/ProjectItems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/ProjectCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/ProjectInfo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/ProjectDetail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const Project = ({ isProjectsClicked, currentProjectIndex, currentProject, isMobileMenuOpen = false, isImagePushedDown, setIsImagePushedDown })=>{
    // State to control detail visibility with animation delay
    const [detailVisible, setDetailVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update detail visibility with slight delay for animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isImagePushedDown || isHovered) {
            setDetailVisible(true);
        } else {
            // Delay hiding to allow animation to complete
            const timer = setTimeout(()=>{
                setDetailVisible(false);
            }, 1500); // Slightly longer than the animation duration to ensure completion
            return ()=>clearTimeout(timer);
        }
    }, [
        isImagePushedDown,
        isHovered
    ]);
    // Directly intercept wheel events to prevent project switching when pushed down
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isImagePushedDown || isHovered) {
            const wheelHandler = (e)=>{
                // Don't prevent default - we want natural scrolling
                // But we need to stop propagation to prevent other handlers from changing projects
                e.stopPropagation();
            };
            window.addEventListener("wheel", wheelHandler, {
                capture: true
            });
            return ()=>{
                window.removeEventListener("wheel", wheelHandler, {
                    capture: true
                });
            };
        }
    }, [
        isImagePushedDown,
        isHovered
    ]);
    // Set up scrolling when image is pushed down
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isImagePushedDown || isHovered) {
            // Enable scrolling when image is pushed down
            document.body.style.overflow = "auto";
            document.body.style.overflowX = "hidden";
        } else {
            // Simple linear scroll animation that works reliably on Safari
            const startPosition = window.scrollY;
            const startTime = performance.now();
            const duration = 400; // Shorter duration for better reliability
            const animateScroll = (currentTime)=>{
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo(0, startPosition * (1 - progress));
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                } else {
                    // Disable scrolling after animation completes
                    document.body.style.overflow = "hidden";
                }
            };
            requestAnimationFrame(animateScroll);
        }
        return ()=>{
            document.body.style.overflow = "hidden";
        };
    }, [
        isImagePushedDown,
        isHovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: isProjectsClicked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    currentProjectIndex: currentProjectIndex,
                    backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][currentProjectIndex % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].length].backgroundImage,
                    isBlurred: false,
                    isPushedDown: isImagePushedDown || isHovered,
                    setIsPushedDown: setIsImagePushedDown
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/projects/Project.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/projects/Project.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isProjectsClicked && !isMobileMenuOpen && !isImagePushedDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    currentProjectIndex: currentProjectIndex,
                    info: currentProject.info,
                    onClick: ()=>setIsImagePushedDown(true),
                    onHoverChange: setIsHovered
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/projects/Project.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/projects/Project.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: isProjectsClicked && detailVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectDetail"], {
                    visible: true,
                    currentProjectIndex: currentProjectIndex,
                    isPushedDown: isImagePushedDown || isHovered
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/projects/Project.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/projects/Project.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Homepage/projects/Project.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/core/images/ImageComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
;
;
;
const AnimatedImage = ({ isVisible, isExiting, randomX, randomY, imageNumber, onHoverChange, imageSrc, delay = 0, className = "absolute w-1/5 z-30", maxWidth = "25vw" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                filter: "blur(10px) brightness(4)",
                x: randomX,
                y: randomY
            },
            animate: {
                opacity: 1,
                filter: "blur(0px) brightness(1)"
            },
            exit: {
                opacity: 0,
                filter: "blur(10px) brightness(4)"
            },
            transition: {
                duration: isExiting ? 0.7 : 0.8,
                delay: isExiting ? 0 : delay
            },
            className: className,
            style: {
                maxWidth
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: imageSrc,
                alt: "Sample image",
                width: 2000,
                height: 2000,
                className: "object-cover",
                onMouseEnter: ()=>onHoverChange(imageNumber)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/core/images/ImageComponent.tsx",
                lineNumber: 55,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/core/images/ImageComponent.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/src/components/ui/core/images/ImageComponent.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AnimatedImage;
}}),
"[project]/src/components/ui/Homepage/about/AboutImages.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AboutImages": (()=>AboutImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$images$2f$ImageComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/core/images/ImageComponent.tsx [app-ssr] (ecmascript)");
;
;
;
const AboutImages = ({ isAboutClicked, isExiting, firstImgVisible, secondImgVisible, thirdImgVisible, firstImageDelay, randomX, randomY, onHoverChange })=>{
    // Mobile-specific state
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentMobileImage, setCurrentMobileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mobileRandomX, setMobileRandomX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobileRandomY, setMobileRandomY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Check if device is mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Generate random positions for mobile
    const generateMobileRandomPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const currentImageNum = currentMobileImage || 1;
        // Approximate image width based on the current image
        const estimatedImgWidth = currentImageNum === 3 ? window.innerWidth * 0.6 : window.innerWidth * 0.5;
        const estimatedImgHeight = estimatedImgWidth * 0.75;
        // Calculate maximum possible position values
        const maxX = Math.max(window.innerWidth - estimatedImgWidth, 0);
        // Set usable vertical space
        const navbarHeight = 80;
        const usableHeight = window.innerHeight - navbarHeight;
        // Define a restricted vertical area where images can appear
        // Make images appear in the top 70% of the screen only
        const topOffset = 100; // How high above the standard content the images can go
        const minY = Math.min(topOffset, usableHeight * 0.3); // Allow images to go higher up
        // Restrict maxY to be no more than 60% down the screen
        // This prevents images from appearing too far down
        const restrictedMaxY = Math.min(usableHeight * 0.6 - estimatedImgHeight, usableHeight - estimatedImgHeight);
        const maxY = Math.max(restrictedMaxY, 0);
        // Generate random positions within boundaries
        const paddingX = 10;
        const randomXPos = Math.random() * Math.max(maxX - paddingX, 0);
        // For Y position, use the restricted range from top to middle area
        const randomYPos = Math.random() * (maxY + minY) - minY;
        setMobileRandomX(randomXPos);
        setMobileRandomY(randomYPos);
    }, [
        currentMobileImage
    ]);
    // Auto-rotate images on mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMobile || !isAboutClicked || isExiting) return;
        // Initial random position
        generateMobileRandomPosition();
        const interval = setInterval(()=>{
            setCurrentMobileImage((prev)=>prev === 3 ? 1 : prev + 1);
            // Generate new random position each time image changes
            generateMobileRandomPosition();
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        isMobile,
        isAboutClicked,
        isExiting,
        generateMobileRandomPosition
    ]);
    // Get visibility for mobile images
    const getMobileVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((imageNum)=>{
        if (!isMobile) return false;
        return isAboutClicked && currentMobileImage === imageNum;
    }, [
        isMobile,
        isAboutClicked,
        currentMobileImage
    ]);
    // Debug log
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobile) {
            console.log(`Mobile state: isAboutClicked=${isAboutClicked}, currentImage=${currentMobileImage}, randomX=${mobileRandomX}, randomY=${mobileRandomY}`);
        }
    }, [
        isMobile,
        isAboutClicked,
        currentMobileImage,
        mobileRandomX,
        mobileRandomY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$images$2f$ImageComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: isMobile ? getMobileVisibility(1) || isExiting && firstImgVisible : isAboutClicked && firstImgVisible || isExiting && firstImgVisible,
                isExiting: isExiting,
                randomX: isMobile ? mobileRandomX : randomX,
                randomY: isMobile ? mobileRandomY : randomY,
                imageNumber: 1,
                onHoverChange: isMobile ? ()=>{} : onHoverChange,
                imageSrc: "/home2.jpeg",
                delay: firstImageDelay ? 0 : 1,
                className: "absolute w-1/5 z-30",
                maxWidth: isMobile ? "50vw" : "25vw"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/about/AboutImages.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$images$2f$ImageComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: isMobile ? getMobileVisibility(2) || isExiting && secondImgVisible : isAboutClicked && secondImgVisible || isExiting && secondImgVisible,
                isExiting: isExiting,
                randomX: isMobile ? mobileRandomX : randomX,
                randomY: isMobile ? mobileRandomY : randomY,
                imageNumber: 2,
                onHoverChange: isMobile ? ()=>{} : onHoverChange,
                imageSrc: "/home3.jpeg",
                className: "absolute w-1/5 z-30",
                maxWidth: isMobile ? "50vw" : "25vw"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/about/AboutImages.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$core$2f$images$2f$ImageComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: isMobile ? getMobileVisibility(3) || isExiting && thirdImgVisible : isAboutClicked && thirdImgVisible || isExiting && thirdImgVisible,
                isExiting: isExiting,
                randomX: isMobile ? mobileRandomX : randomX,
                randomY: isMobile ? mobileRandomY : randomY,
                imageNumber: 3,
                onHoverChange: isMobile ? ()=>{} : onHoverChange,
                imageSrc: "/home.jpeg",
                className: "absolute w-1/3 z-39",
                maxWidth: isMobile ? "60vw" : "30vw"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/about/AboutImages.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
}}),
"[project]/src/components/magicui/morphing-text.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MorphingText": (()=>MorphingText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// A simple utility to join Tailwind classes
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
/**
 * The built-in threshold filter. We'll apply it with Tailwind's `[filter:url(#threshold)]`.
 */ const SvgFilters = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        id: "filters",
        className: "fixed h-0 w-0",
        preserveAspectRatio: "xMidYMid slice",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: "threshold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                    in: "SourceGraphic",
                    type: "matrix",
                    values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 250 -140"
                }, void 0, false, {
                    fileName: "[project]/src/components/magicui/morphing-text.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/magicui/morphing-text.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/magicui/morphing-text.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
/**
 * Cubic ease-out function:
 *   0 -> 0
 *   1 -> 1
 *   starts fast, slows near the end
 */ function cubicEaseOut(t) {
    return 1 - Math.pow(1 - t, 3);
}
const MorphingText = ({ text, visible, morphTime = 8 })=>{
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastVisibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(visible);
    const isFirstRenderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Skip animation on first render
        if (isFirstRenderRef.current) {
            isFirstRenderRef.current = false;
            lastVisibleRef.current = visible;
            return;
        }
        // Start a new animation only when visibility changes
        if (visible !== lastVisibleRef.current) {
            lastVisibleRef.current = visible;
            startTimeRef.current = null;
            if (requestIdRef.current) {
                cancelAnimationFrame(requestIdRef.current);
            }
            requestIdRef.current = requestAnimationFrame(animate);
        }
    }, [
        visible,
        morphTime
    ]);
    const animate = (timestampMs)=>{
        if (startTimeRef.current === null) {
            // Apply offset only for fade-in, not for fade-out
            startTimeRef.current = timestampMs - (visible ? 3600 : 0);
            // For fade-out, ensure we start at full opacity
            if (!visible && textRef.current) {
                textRef.current.style.opacity = "100%";
                textRef.current.style.filter = "blur(0px)";
            }
        }
        // Convert ms → seconds
        const elapsedSeconds = (timestampMs - startTimeRef.current) / 1000;
        // Linear fraction from 0 -> 1
        let fraction = elapsedSeconds / morphTime;
        if (fraction > 1) {
            fraction = 1;
        }
        // Apply cubic ease-out
        const eased = cubicEaseOut(fraction);
        if (textRef.current) {
            if (visible) {
                // Fading in: 0% -> 100% opacity
                textRef.current.style.opacity = `${eased * 100}%`;
                // Blur from 8px -> 0px
                const blurAmount = 8 * (1 - eased);
                textRef.current.style.filter = `blur(${blurAmount}px)`;
            } else {
                // Fading out: 100% -> 0% opacity
                textRef.current.style.opacity = `${(1 - eased) * 100}%`;
                // Blur from 0px -> 8px
                const blurAmount = 8 * eased;
                textRef.current.style.filter = `blur(${blurAmount}px)`;
            }
        }
        if (fraction < 1) {
            requestIdRef.current = requestAnimationFrame(animate);
        } else {
            // If fully faded out, make sure we're at 0 opacity
            if (!visible && textRef.current) {
                textRef.current.style.opacity = "0";
            }
        }
    };
    // Cleanup animation on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (requestIdRef.current) {
                cancelAnimationFrame(requestIdRef.current);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("relative ml-1 font-sans lg:text-[12px] text-[10px] font-bold [filter:url(#threshold)] w-[200px] lg:w-full lg:max-w-screen-md "),
        style: {
            opacity: visible ? 1 : 0,
            transition: `opacity 0.7s ease-in-out${visible ? ", filter 0.7s ease-in-out" : ""}`,
            filter: visible ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))" : "blur(8px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
            textShadow: "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    opacity: "0",
                    filter: "blur(8px)",
                    display: "inline-block"
                },
                ref: textRef,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SvgFilters, {}, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/magicui/morphing-text.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/Homepage/projects/ProjectName.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
;
;
;
function ProjectName({ names, currentIndex, onNameClick, setCurrentProjectIndex, isPushedDown = false }) {
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [safeIndex, setSafeIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const previousIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    // Sync with parent index when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (names.length > 0) {
            let newIndex = 0;
            if (!Number.isNaN(currentIndex) && Number.isFinite(currentIndex)) {
                newIndex = Math.max(0, Math.min(currentIndex, names.length - 1));
            }
            previousIndexRef.current = newIndex;
            setSafeIndex(newIndex);
        }
    }, [
        currentIndex,
        names.length
    ]);
    // Scroll to center the active item when safeIndex changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (listRef.current && names.length > 0) {
            try {
                const selector = `li:nth-child(${safeIndex + 1})`;
                const activeElement = listRef.current.querySelector(selector);
                if (activeElement) {
                    setTimeout(()=>{
                        activeElement.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }, 50);
                }
            } catch  {
            // Silent error handling
            }
        }
    }, [
        safeIndex,
        names.length
    ]);
    // Simple easing function that performs better on Safari
    const simpleEaseOut = (t)=>{
        // Simple quadratic ease-out function
        return 1 - (1 - t) * (1 - t);
    };
    const handleNameClick = (index)=>{
        previousIndexRef.current = index;
        setSafeIndex(index);
        setCurrentProjectIndex(index);
        // Safari-optimized smooth scroll implementation
        const startPosition = window.scrollY;
        const startTime = performance.now();
        const animateScroll = (currentTime)=>{
            const elapsed = currentTime - startTime;
            const duration = 600; // Shorter duration for better performance
            const progress = Math.min(elapsed / duration, 1);
            // Using our simpler easing function instead of Framer Motion's easeInOut
            const easeProgress = simpleEaseOut(progress);
            window.scrollTo(0, startPosition * (1 - easeProgress));
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };
        requestAnimationFrame(animateScroll);
        if (onNameClick) {
            onNameClick(index);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 bg-transparent z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/projects/ProjectName.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: containerRef,
                className: `inline-block ${isPushedDown ? "" : "max-h-[63vh] overflow-hidden"}`,
                style: {
                    textShadow: "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                initial: {
                    opacity: 0,
                    fontWeight: 700,
                    filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
                },
                animate: {
                    opacity: 1,
                    fontWeight: 700,
                    filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
                },
                exit: {
                    opacity: 0,
                    fontWeight: 700,
                    filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
                },
                transition: {
                    duration: 0.7
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].ul, {
                        initial: {
                            opacity: 0,
                            filter: "blur(10px)"
                        },
                        animate: {
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                                duration: 0.7
                            }
                        },
                        exit: {
                            opacity: 0,
                            filter: "blur(10px)",
                            transition: {
                                duration: 0
                            }
                        },
                        className: "text-white list-none py-[30vh] text-left lg:w-[200px]",
                        ref: listRef,
                        children: names.map((name, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `project-name-item lg:py-2 py-1 transition-all duration-300 ease-in-out px-1.5 ${index === safeIndex ? "font-bold opacity-100 active" : "font-normal opacity-60"} cursor-pointer hover:opacity-90`,
                                onClick: ()=>handleNameClick(index),
                                children: name
                            }, index, false, {
                                fileName: "[project]/src/components/ui/Homepage/projects/ProjectName.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this))
                    }, "name-list", false, {
                        fileName: "[project]/src/components/ui/Homepage/projects/ProjectName.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/projects/ProjectName.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, `project-title-${names.join("-")}`, false, {
                fileName: "[project]/src/components/ui/Homepage/projects/ProjectName.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Homepage/projects/ProjectName.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/Homepage/creatives/CreativeName.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreativeName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
;
function CreativeName({ names, currentIndex, onNameClick, setCurrentCreativeIndex }) {
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [safeIndex, setSafeIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const previousIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    // Sync with parent index when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (names.length > 0) {
            let newIndex = 0;
            if (!Number.isNaN(currentIndex) && Number.isFinite(currentIndex)) {
                newIndex = Math.max(0, Math.min(currentIndex, names.length - 1));
            }
            previousIndexRef.current = newIndex;
            setSafeIndex(newIndex);
        }
    }, [
        currentIndex,
        names.length
    ]);
    // Scroll to center the active item when safeIndex changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (listRef.current && names.length > 0) {
            try {
                const selector = `li:nth-child(${safeIndex + 1})`;
                const activeElement = listRef.current.querySelector(selector);
                if (activeElement) {
                    setTimeout(()=>{
                        activeElement.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }, 50);
                }
            } catch  {
            // Silent error handling
            }
        }
    }, [
        safeIndex,
        names.length
    ]);
    const handleNameClick = (index)=>{
        previousIndexRef.current = index;
        setSafeIndex(index);
        setCurrentCreativeIndex(index);
        if (onNameClick) {
            onNameClick(index);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0  bg-transparent z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/creatives/CreativeName.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: containerRef,
                className: "inline-block max-h-[63vh] overflow-hidden",
                style: {
                    textShadow: "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                initial: {
                    opacity: 0,
                    fontWeight: 700,
                    filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
                },
                animate: {
                    opacity: 1,
                    fontWeight: 700,
                    filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
                },
                exit: {
                    opacity: 0,
                    fontWeight: 700,
                    filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
                },
                transition: {
                    duration: 0.7
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "text-white list-none py-[30vh] px-0 m-0 text-left w-[200px] ",
                    ref: listRef,
                    children: names.map((name, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `lg:py-2 py-1 transition-all duration-300 ease-in-out pl-1.5 ${index === safeIndex ? "font-bold opacity-100" : "font-normal opacity-60"} cursor-pointer hover:opacity-90`,
                            onClick: ()=>handleNameClick(index),
                            children: name
                        }, index, false, {
                            fileName: "[project]/src/components/ui/Homepage/creatives/CreativeName.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/creatives/CreativeName.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, `project-title-${names.join("-")}`, false, {
                fileName: "[project]/src/components/ui/Homepage/creatives/CreativeName.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Homepage/creatives/CreativeName.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/Homepage/header/LogoText.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LogoText": (()=>LogoText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const LogoText = ({ isAboutClicked })=>{
    // Add state tracking for re-rendering
    const [renderKey, setRenderKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const prevStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isAboutClicked);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Force re-render when state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInitialRender.current) {
            isInitialRender.current = false;
            prevStateRef.current = isAboutClicked;
            return;
        }
        if (prevStateRef.current !== isAboutClicked) {
            setRenderKey((prev)=>prev + 1);
            prevStateRef.current = isAboutClicked;
            // Reset visibility when state changes
            setIsVisible(false);
            // Wait for logo animation to complete before showing LogoText
            const timeoutId = setTimeout(()=>{
                setIsVisible(true);
            }, 800); // 800ms to allow logo animation (700ms) to complete plus buffer
            return ()=>clearTimeout(timeoutId);
        }
    }, [
        isAboutClicked
    ]);
    // Set initial visibility on component mount with a delay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initialTimeoutId = setTimeout(()=>{
            setIsVisible(true);
        }, 800);
        return ()=>clearTimeout(initialTimeoutId);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
            initial: {
                opacity: 0,
                fontWeight: 700,
                filter: isAboutClicked ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))" : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
            },
            animate: {
                opacity: 1,
                fontWeight: 700,
                filter: isAboutClicked ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))" : "blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
            },
            exit: {
                opacity: 0,
                fontWeight: 700,
                filter: isAboutClicked ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))" : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
            },
            transition: {
                duration: 0.7,
                filter: {
                    duration: 0.3,
                    type: "tween"
                },
                boxShadow: {
                    duration: 0.3
                }
            },
            className: "inline-block pl-1.5",
            style: {
                textShadow: isAboutClicked ? "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)" : "0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 2px rgba(0, 0, 0, 1)",
                display: "inline-block",
                verticalAlign: "middle",
                transform: "translateZ(0)",
                willChange: "filter, opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden"
            },
            children: "Seventyfour"
        }, `title-${renderKey}-${isAboutClicked ? "about" : "default"}`, false, {
            fileName: "[project]/src/components/ui/Homepage/header/LogoText.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Homepage/header/LogoText.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/Homepage/header/Logo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
// Create a motion version of the Next.js Image component
const MotionImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const Logo = ({ handleLogoClick, isProjectsClicked, isCreativesClicked, isAboutClicked, isMobileMenuOpen })=>{
    // Add state to track when any button state changes
    const [animationKey, setAnimationKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Update the animation key when any button state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAnimationKey((prevKey)=>prevKey + 1);
    }, [
        isProjectsClicked,
        isCreativesClicked,
        isAboutClicked
    ]);
    // Base filter effects (without blur)
    const baseFilter = isProjectsClicked || isCreativesClicked || isAboutClicked ? "drop-shadow(0px 0px 1px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 4px rgba(0, 0, 0, 1))" : "invert(1) drop-shadow(0px 0px 1px rgba(0, 0, 0, 1)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 1))";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: !isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionImage, {
            src: "/logo.svg",
            alt: "Seventyfour logo",
            width: 16,
            height: 16,
            className: "object-contain cursor-pointer",
            style: {
                position: "relative",
                transform: "translateZ(0)",
                willChange: "filter",
                verticalAlign: "middle",
                display: "inline-block"
            },
            onClick: handleLogoClick,
            "data-logo-element": "true",
            initial: {
                opacity: 0,
                filter: `blur(15px) ${baseFilter}`,
                y: 0
            },
            animate: {
                opacity: 1,
                filter: `blur(0px) ${baseFilter}`,
                y: 0
            },
            exit: {
                opacity: 0,
                filter: `blur(15px) ${baseFilter}`,
                y: 0
            },
            transition: {
                duration: 0.7,
                filter: {
                    type: "spring",
                    damping: 20
                }
            }
        }, `logo-${animationKey}`, false, {
            fileName: "[project]/src/components/ui/Homepage/header/Logo.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Homepage/header/Logo.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/Homepage/header/LogoTitle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LogoTitle": (()=>LogoTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$morphing$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/magicui/morphing-text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/ProjectName.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/creatives/CreativeName.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/creatives/CreativeItems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/ProjectItems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$LogoText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/header/LogoText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/header/Logo.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const LogoTitle = ({ isProjectsClicked, isCreativesClicked, isAboutClicked, currentProjectIndex, currentCreativeIndex, handleLogoClick, setCurrentCreativeIndex, setCurrentProjectIndex, isMobileMenuOpen = false })=>{
    const texts = "IS A COLLECTIVE OF CREATIVES";
    const [showMorphingText, setShowMorphingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showListContent, setShowListContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoText, setShowLogoText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track when the Logo animation completes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reset state when any navigation changes
        setShowLogoText(false);
        // Set a timeout to show the LogoText after logo animation completes
        const logoTextTimeout = setTimeout(()=>{
            setShowLogoText(true);
        }, 800); // 800ms should be enough for the logo animation to complete
        return ()=>clearTimeout(logoTextTimeout);
    }, [
        isProjectsClicked,
        isCreativesClicked,
        isAboutClicked
    ]);
    // Handle the delayed appearance of the morphing text
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timeoutId = null;
        if (isAboutClicked) {
            // Clear any existing timeouts
            if (timeoutId) clearTimeout(timeoutId);
            // Set timeout to show morphing text after LogoText animation completes
            timeoutId = setTimeout(()=>{
                setShowMorphingText(true);
            }, 1600); // 800ms for logo + 800ms for LogoText
        } else {
            // Hide immediately when about is unclicked
            setShowMorphingText(false);
        }
        // Cleanup on unmount or when dependencies change
        return ()=>{
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [
        isAboutClicked
    ]);
    // Handle the delayed appearance of project/creative lists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let listTimeoutId = null;
        if (isProjectsClicked || isCreativesClicked) {
            // Reset state first
            setShowListContent(false);
            // Clear any existing timeouts
            if (listTimeoutId) clearTimeout(listTimeoutId);
            // Set timeout to show lists after logo animation completes
            listTimeoutId = setTimeout(()=>{
                setShowListContent(true);
            }, 800); // Increased to ensure it appears after logo and other animations
        } else {
            // Reset when neither is clicked
            setShowListContent(false);
        }
        // Cleanup function
        return ()=>{
            if (listTimeoutId) clearTimeout(listTimeoutId);
        };
    }, [
        isProjectsClicked,
        isCreativesClicked
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-row w-1/2 lg:pl-16 z-50 ${isAboutClicked ? "text-white" : "text-black"} pl-2`,
        style: {
            transform: "translateZ(0)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-row flex items-center",
            style: {
                transform: "translateZ(0)",
                willChange: "contents",
                position: "relative",
                height: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                    handleLogoClick: handleLogoClick,
                    isProjectsClicked: isProjectsClicked,
                    isCreativesClicked: isCreativesClicked,
                    isAboutClicked: isAboutClicked,
                    isMobileMenuOpen: isMobileMenuOpen
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${isAboutClicked ? "text-white" : "text-black"} lg:p-1 lg:text-xs text-[10px] uppercase tracking-tight flex flex-row lg:ml-0 ml-0 items-center`,
                    style: {
                        height: "auto",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: !isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: isProjectsClicked ? showListContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    names: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$ProjectItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project)=>project.name),
                                    currentIndex: currentProjectIndex,
                                    setCurrentProjectIndex: setCurrentProjectIndex
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
                                    lineNumber: 143,
                                    columnNumber: 23
                                }, this) : isCreativesClicked ? showListContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    names: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$CreativeItems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["creatives"].map((creative)=>creative.name),
                                    currentIndex: currentCreativeIndex,
                                    setCurrentCreativeIndex: setCurrentCreativeIndex
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
                                    lineNumber: 151,
                                    columnNumber: 23
                                }, this) : showLogoText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$LogoText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoText"], {
                                    isAboutClicked: isAboutClicked
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
                                    lineNumber: 159,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        isAboutClicked && !isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$morphing$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MorphingText"], {
                            text: texts,
                            visible: showMorphingText
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Homepage/header/LogoTitle.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/navbar/NavBarItem.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavBarItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function NavBarItem({ name, handleButtonClick, isAboutClicked, isCreativesClicked, isProjectsClicked }) {
    // Check if any button is clicked
    const isAnyButtonClicked = isAboutClicked || isCreativesClicked || isProjectsClicked;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            filter: "blur(10px)"
        },
        animate: {
            opacity: 1,
            filter: "blur(0px)"
        },
        exit: {
            opacity: 0,
            filter: "blur(10px)"
        },
        transition: {
            duration: 0.7
        },
        style: {
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: `hidden lg:block lg:p-4 py-2 lg:py-0 font-normal lg:text-xs text-[10px] cursor-pointer uppercase tracking-tight w-20 text-right lg:text-center mr-2.5 lg:mr-0`,
            style: {
                textShadow: isAnyButtonClicked ? "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)" : "0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 2px rgba(0, 0, 0, 1)",
                // Apply filter directly as a style instead of animating it
                filter: isAnyButtonClicked ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))" : "blur(0px)",
                WebkitFilter: isAnyButtonClicked ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))" : "blur(0px)"
            },
            onClick: handleButtonClick,
            children: name
        }, void 0, false, {
            fileName: "[project]/src/components/ui/navbar/NavBarItem.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, name, false, {
        fileName: "[project]/src/components/ui/navbar/NavBarItem.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/navbar/NavbarMobileMenu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const NavbarMobileMenu = ({ isOpen, onClose, onAboutClick, onCreativesClick, onProjectsClick, handleLogoClick, isAboutClicked, isCreativesClicked, isProjectsClicked })=>{
    const handleItemClick = (handler)=>{
        onClose();
        setTimeout(()=>{
            handler();
        }, 100);
    };
    const textShadowStyle = {
        textShadow: "0px 0px 4px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                filter: "blur(50px) brightness(2)"
            },
            animate: {
                opacity: 1,
                filter: "blur(0px) brightness(1)"
            },
            exit: {
                opacity: 0,
                filter: "blur(10px) brightness(2)"
            },
            transition: {
                duration: 0.7
            },
            className: `fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/congus.jpeg",
                        alt: "Background",
                        fill: true,
                        className: "object-cover filter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 left-2 z-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.svg",
                        alt: "Seventyfour logo",
                        width: 16,
                        height: 16,
                        className: "object-contain cursor-pointer ",
                        onClick: handleLogoClick,
                        style: {
                            filter: "drop-shadow(0px 0px 1px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 4px rgba(0, 0, 0, 1))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full max-w-screen-xl mx-auto px-2 md:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-between items-start ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "text-white flex flex-col space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            initial: {
                                                opacity: 0,
                                                filter: "blur(30px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                            },
                                            animate: {
                                                opacity: 1,
                                                filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
                                            },
                                            exit: {
                                                opacity: 0,
                                                filter: "blur(100px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                            },
                                            transition: {
                                                duration: 0.7
                                            },
                                            className: `text-[10px] uppercase tracking-tight text-left cursor-pointer ${isAboutClicked ? "font-black" : "font-normal"}`,
                                            style: textShadowStyle,
                                            onClick: ()=>handleItemClick(onAboutClick),
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            initial: {
                                                opacity: 0,
                                                filter: "blur(30px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                            },
                                            animate: {
                                                opacity: 1,
                                                filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
                                            },
                                            exit: {
                                                opacity: 0,
                                                filter: "blur(100px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                            },
                                            transition: {
                                                duration: 0.7
                                            },
                                            className: `text-[10px] uppercase tracking-tight text-left cursor-pointer ${isCreativesClicked ? "font-black" : "font-normal"}`,
                                            style: textShadowStyle,
                                            onClick: ()=>handleItemClick(onCreativesClick),
                                            children: "Creatives"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            initial: {
                                                opacity: 0,
                                                filter: "blur(30px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                            },
                                            animate: {
                                                opacity: 1,
                                                filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
                                            },
                                            exit: {
                                                opacity: 0,
                                                filter: "blur(100px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                            },
                                            transition: {
                                                duration: 0.7
                                            },
                                            className: `text-[10px] uppercase tracking-tight text-left cursor-pointer ${isProjectsClicked ? "font-black" : "font-normal"}`,
                                            style: textShadowStyle,
                                            onClick: ()=>handleItemClick(onProjectsClick),
                                            children: "Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        opacity: 0,
                                        filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                    },
                                    animate: {
                                        opacity: 1,
                                        filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
                                    },
                                    exit: {
                                        opacity: 0,
                                        filter: "blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                                    },
                                    transition: {
                                        duration: 0.7
                                    },
                                    className: "text-white text-[10px] uppercase tracking-tight cursor-pointer mt-[46px]",
                                    style: textShadowStyle,
                                    onClick: onClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navbar/NavbarMobileMenu.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NavbarMobileMenu;
}}),
"[project]/src/components/ui/Homepage/header/Navigation.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Navigation": (()=>Navigation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2f$NavBarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/navbar/NavBarItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2f$NavbarMobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/navbar/NavbarMobileMenu.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const Navigation = ({ justifyProp, isProjectsClicked, isAboutClicked, isCreativesClicked, handleAboutClick, handleCreativesClick, handleProjectsClick, handleMenuClick, handleLogoClick })=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const prevStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [showMenuButton, setShowMenuButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMobileMenu = ()=>{
        // Toggle the mobile menu state
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Call the parent handler if provided
        if (handleMenuClick && typeof handleMenuClick === "function") {
            handleMenuClick();
        }
    };
    // Initial effect to handle delayed menu button appearance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // On initial load, wait for logo animation to complete
        const initialMenuTimeout = setTimeout(()=>{
            setShowMenuButton(true);
        }, 800); // Same delay as LogoText (800ms)
        return ()=>clearTimeout(initialMenuTimeout);
    }, []);
    // Reset button visibility when navigation state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitialRender.current) {
            // Hide menu button on state change
            setShowMenuButton(false);
            // Set timeout to show menu button after logo animation completes
            const menuTimeout = setTimeout(()=>{
                setShowMenuButton(true);
            }, 800);
            return ()=>clearTimeout(menuTimeout);
        }
    }, [
        isAboutClicked,
        isProjectsClicked,
        isCreativesClicked
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInitialRender.current) {
            isInitialRender.current = false;
            prevStateRef.current = isAboutClicked || isProjectsClicked || isCreativesClicked;
        }
    }, [
        isAboutClicked,
        isProjectsClicked,
        isCreativesClicked
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-black flex lg:flex-row flex-col lg:pr-16 z-50 lg:w-[50vw] right-[0] fixed ${isAboutClicked || isProjectsClicked || isCreativesClicked || isMobileMenuOpen ? "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1)) text-white" : "text-black"} ${justifyProp}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: !isProjectsClicked && !isCreativesClicked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2f$NavBarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: "About",
                            handleButtonClick: handleAboutClick,
                            isAboutClicked: isAboutClicked,
                            isCreativesClicked: isCreativesClicked,
                            isProjectsClicked: isProjectsClicked
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: !isProjectsClicked && !isAboutClicked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2f$NavBarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: "Creatives",
                            handleButtonClick: handleCreativesClick,
                            isAboutClicked: isAboutClicked,
                            isCreativesClicked: isCreativesClicked,
                            isProjectsClicked: isProjectsClicked
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: !isAboutClicked && !isCreativesClicked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2f$NavBarItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: "Projects",
                            handleButtonClick: handleProjectsClick,
                            isAboutClicked: isAboutClicked,
                            isCreativesClicked: isCreativesClicked,
                            isProjectsClicked: isProjectsClicked
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: !isMobileMenuOpen && showMenuButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                opacity: 0,
                                filter: isAboutClicked || isProjectsClicked || isCreativesClicked ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))" : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                            },
                            animate: {
                                opacity: 1,
                                filter: isAboutClicked || isProjectsClicked || isCreativesClicked ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))" : "blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                            },
                            exit: {
                                opacity: 0,
                                filter: isAboutClicked || isProjectsClicked || isCreativesClicked ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))" : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                            },
                            transition: {
                                duration: 0.7,
                                filter: {
                                    duration: 0.3
                                },
                                boxShadow: {
                                    duration: 0.3
                                }
                            },
                            style: {
                                willChange: "filter, opacity",
                                backfaceVisibility: "hidden",
                                WebkitBackfaceVisibility: "hidden",
                                textShadow: isAboutClicked || isProjectsClicked || isCreativesClicked ? "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 1px rgba(255, 255, 255, 1)" : "0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 1px rgba(0, 0, 0, 1)"
                            },
                            className: "block lg:hidden lg:p-4 mr-2 lg:mr-0 font-normal text-[10px] cursor-pointer uppercase tracking-tight lg:w-20 z-[999] relative pointer-events-auto",
                            onClick: toggleMobileMenu,
                            children: "Menu"
                        }, `menu-button-${isAboutClicked || isProjectsClicked || isCreativesClicked ? "active" : "inactive"}`, false, {
                            fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2f$NavbarMobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isMobileMenuOpen,
                onClose: toggleMobileMenu,
                onAboutClick: handleAboutClick,
                onCreativesClick: handleCreativesClick,
                onProjectsClick: handleProjectsClick,
                handleLogoClick: handleLogoClick,
                isAboutClicked: isAboutClicked,
                isCreativesClicked: isCreativesClicked,
                isProjectsClicked: isProjectsClicked
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/header/Navigation.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
}}),
"[project]/src/components/ui/Homepage/layout/MainLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainLayout": (()=>MainLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$about$2f$AboutImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/about/AboutImages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$LogoTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/header/LogoTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/header/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const MainLayout = ({ isAboutClicked, isProjectsClicked, isCreativesClicked, isExiting, firstImgVisible, secondImgVisible, thirdImgVisible, firstImageDelay, randomX, randomY, onHoverChange, justifyProp, currentProject, currentProjectIndex, currentCreative, currentCreativeIndex, handleLogoClick, handleAboutClick, handleCreativesClick, handleProjectsClick, setCurrentCreativeIndex, setCurrentProjectIndex, handleMenuClick, isMobileMenuOpen, isPushedDown, isHeaderVisible, isHeaderAnimatingOut })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    backgroundColor: "#00000",
                    opacity: 0
                },
                animate: {
                    backgroundColor: isAboutClicked || isProjectsClicked ? "#000000" : "#FCFBF4",
                    opacity: 1
                },
                exit: {
                    opacity: 1
                },
                transition: {
                    duration: 0.7,
                    ease: "easeInOut"
                },
                className: `fixed min-h-screen w-full z-1 ${isAboutClicked ? "about-active" : ""} ${isMobileMenuOpen ? "menu-active" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/layout/MainLayout.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 flex-row flex items-center w-full h-screen", isHeaderVisible || isHeaderAnimatingOut ? "z-4" : "z-2"),
                style: {
                    pointerEvents: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$about$2f$AboutImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutImages"], {
                        isAboutClicked: isAboutClicked,
                        isExiting: isExiting,
                        firstImgVisible: firstImgVisible,
                        secondImgVisible: secondImgVisible,
                        thirdImgVisible: thirdImgVisible,
                        firstImageDelay: firstImageDelay,
                        randomX: randomX,
                        randomY: randomY,
                        onHoverChange: onHoverChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Homepage/layout/MainLayout.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex flex-row w-full items-center justify-between",
                        initial: {
                            opacity: 1,
                            filter: "blur(30px)"
                        },
                        animate: {
                            opacity: isHeaderVisible ? 1 : 0,
                            filter: isHeaderVisible ? "blur(0px)" : "blur(10px)"
                        },
                        exit: {
                            opacity: 1,
                            filter: "blur(30px)"
                        },
                        transition: {
                            duration: 0.7,
                            ease: "easeInOut"
                        },
                        style: {
                            pointerEvents: isHeaderVisible ? "auto" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$LogoTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoTitle"], {
                                setCurrentCreativeIndex: setCurrentCreativeIndex,
                                setCurrentProjectIndex: setCurrentProjectIndex,
                                isProjectsClicked: isProjectsClicked,
                                isCreativesClicked: isCreativesClicked,
                                isAboutClicked: isAboutClicked,
                                currentProject: currentProject,
                                currentProjectIndex: currentProjectIndex,
                                currentCreative: currentCreative,
                                currentCreativeIndex: currentCreativeIndex,
                                handleLogoClick: handleLogoClick,
                                isMobileMenuOpen: isMobileMenuOpen,
                                isPushedDown: isPushedDown
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Homepage/layout/MainLayout.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$header$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigation"], {
                                justifyProp: justifyProp,
                                isProjectsClicked: isProjectsClicked,
                                isAboutClicked: isAboutClicked,
                                isCreativesClicked: isCreativesClicked,
                                handleAboutClick: handleAboutClick,
                                handleCreativesClick: handleCreativesClick,
                                handleProjectsClick: handleProjectsClick,
                                handleMenuClick: handleMenuClick,
                                handleLogoClick: handleLogoClick
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Homepage/layout/MainLayout.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Homepage/layout/MainLayout.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Homepage/layout/MainLayout.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
}}),
"[project]/src/components/ui/Homepage/Hero/Hero.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useImageNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useImageNavigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNavigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useContentScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useContentScroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$Creative$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/creatives/Creative.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$Project$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/projects/Project.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$layout$2f$MainLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Homepage/layout/MainLayout.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Hero() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHeaderVisible, setIsHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isNearBottom, setIsNearBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHeaderAnimatingOut, setIsHeaderAnimatingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const animationDuration = 700;
    const navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    const { isAboutClicked, isCreativesClicked, isProjectsClicked, justifyProp, handleLogoClick, handleAboutClick, handleCreativesClick, handleProjectsClick } = navigation;
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useImageNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImageNavigation"])();
    const { firstImgVisible, secondImgVisible, thirdImgVisible, firstImageDelay, setFirstImageDelay, isExiting, randomX, randomY, onHoverChange, handleAboutToggle } = images;
    // Create a proper navigation handler for scrolling between sections
    const handleNavigate = (section)=>{
        if (section === "projects") {
            handleProjectsClick();
        } else if (section === "creatives") {
            handleCreativesClick();
        }
    };
    // Update the useContentScroll hook to use the correct navigation handler
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useContentScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContentScroll"])(isProjectsClicked, isCreativesClicked, isAboutClicked, handleNavigate, isMobileMenuOpen);
    const { setIsBackgroundBlurred, currentProjectIndex, currentProject, currentCreativeIndex, currentCreative, setCurrentCreativeIndex, setCurrentProjectIndex, isImagePushedDown, setIsImagePushedDown } = content;
    // Connect the about click handler to the image toggling
    const handleAboutToggleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(handleAboutToggle);
    // Update ref if function changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleAboutToggleRef.current = handleAboutToggle;
    }, [
        handleAboutToggle
    ]);
    // Use the ref in the effect that depends on isAboutClicked
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleAboutToggleRef.current(isAboutClicked);
    }, [
        isAboutClicked
    ]);
    // Manage first image delay when about is clicked
    const wrappedHandleAboutClick = ()=>{
        const isActivating = handleAboutClick();
        if (isActivating) {
            setTimeout(()=>{
                setFirstImageDelay(true);
            }, 700);
            setFirstImageDelay(false);
        }
    };
    // Handle mobile menu toggle
    const handleMenuClick = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    // Add effect to manage body scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        // Cleanup
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        isMobileMenuOpen
    ]);
    // Effect to handle header visibility on scroll when a project is clicked
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isProjectsClicked) {
            setIsHeaderVisible(true);
            setIsHeaderAnimatingOut(false);
            return;
        }
        let ticking = false;
        let animationTimeoutId = null;
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const isAtTop = currentScrollY <= 100;
            const isAtBottom = currentScrollY + windowHeight >= scrollHeight - 200;
            const shouldBeVisible = isAtTop || isAtBottom;
            setIsNearBottom(isAtBottom);
            if (!ticking) {
                window.requestAnimationFrame(()=>{
                    if (shouldBeVisible && animationTimeoutId) {
                        clearTimeout(animationTimeoutId);
                        animationTimeoutId = null;
                        setIsHeaderAnimatingOut(false);
                    }
                    if (isHeaderVisible !== shouldBeVisible) {
                        if (!shouldBeVisible) {
                            setIsHeaderVisible(false);
                            setIsHeaderAnimatingOut(true);
                            animationTimeoutId = setTimeout(()=>{
                                setIsHeaderAnimatingOut(false);
                                animationTimeoutId = null;
                            }, animationDuration);
                        } else {
                            setIsHeaderVisible(true);
                            setIsHeaderAnimatingOut(false);
                        }
                    }
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };
        // Initial check
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        // Cleanup
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            if (animationTimeoutId) {
                clearTimeout(animationTimeoutId);
            }
        };
    }, [
        isProjectsClicked,
        isHeaderVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-screen ${isMobileMenuOpen ? "overflow-hidden" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$creatives$2f$Creative$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Creative"], {
                isCreativesClicked: isCreativesClicked,
                currentCreativeIndex: currentCreativeIndex,
                currentCreative: currentCreative,
                setIsBackgroundBlurred: setIsBackgroundBlurred,
                isMobileMenuOpen: isMobileMenuOpen
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/Hero/Hero.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$projects$2f$Project$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Project"], {
                isProjectsClicked: isProjectsClicked,
                currentProjectIndex: currentProjectIndex,
                currentProject: currentProject,
                isMobileMenuOpen: isMobileMenuOpen,
                isImagePushedDown: isImagePushedDown,
                setIsImagePushedDown: setIsImagePushedDown
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/Hero/Hero.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Homepage$2f$layout$2f$MainLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainLayout"], {
                setCurrentCreativeIndex: setCurrentCreativeIndex,
                setCurrentProjectIndex: setCurrentProjectIndex,
                isAboutClicked: isAboutClicked,
                isProjectsClicked: isProjectsClicked,
                isCreativesClicked: isCreativesClicked,
                isExiting: isExiting,
                firstImgVisible: firstImgVisible,
                secondImgVisible: secondImgVisible,
                thirdImgVisible: thirdImgVisible,
                firstImageDelay: firstImageDelay,
                randomX: randomX,
                randomY: randomY,
                onHoverChange: onHoverChange,
                justifyProp: justifyProp,
                currentProject: currentProject,
                currentProjectIndex: currentProjectIndex,
                currentCreative: currentCreative,
                currentCreativeIndex: currentCreativeIndex,
                handleLogoClick: handleLogoClick,
                handleAboutClick: wrappedHandleAboutClick,
                handleCreativesClick: handleCreativesClick,
                handleProjectsClick: handleProjectsClick,
                handleMenuClick: handleMenuClick,
                isMobileMenuOpen: isMobileMenuOpen,
                isPushedDown: isImagePushedDown,
                isHeaderVisible: isHeaderVisible,
                isHeaderAnimatingOut: isHeaderAnimatingOut
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Homepage/Hero/Hero.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Homepage/Hero/Hero.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_4780e78b._.js.map