/**
 * BottomFadeOverlay Component
 *
 * This component renders a fixed gradient overlay at the bottom of its parent.
 * It creates a subtle fade effect, transitioning from a solid background color
 * to transparent, helping indicate scrollable content or enhancing visual depth.
 *
 * - Light mode: Fades from `#fafafa` to transparent.
 * - Dark mode: Fades from `#0a0a0a` to transparent.
 * - `pointer-events-none`: Ensures it doesn't block interactions.
 *
 * ⚠️ Note: This component **must** be wrapped inside a `div` with `relative` positioning
 * to ensure proper placement.
 *
 * Usage:
 * ```tsx
 * <div className="relative">
 *   <YourContent />
 *   <BottomFadeOverlay />
 * </div>
 * ```
 */
const BottomFadeOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fafafa] via-[#9d9da200] to-transparent dark:from-[#0a0a0a] dark:via-[#18181b73] dark:to-transparent"></div>
  );
};

export default BottomFadeOverlay;
