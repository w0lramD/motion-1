import { AxisBox2D } from "../../../types/geometry"

export interface LayoutProps {
    /**
     * If `true`, this component will automatically animate to its new position when
     * its layout changes.
     *
     * ```jsx
     * <motion.div layout />
     * ```
     *
     * This will perform a layout animation using performant transforms. Part of this technique
     * involved animating an element's scale. This can introduce visual distortions on children,
     * `boxShadow` and `borderRadius`.
     *
     * To correct distortion on immediate children, add `layout` to those too.
     *
     * `boxShadow` and `borderRadius` will automatically be corrected if they are already being
     * animated on this component. Otherwise, set them directly via the `initial` prop.
     *
     * @public
     */
    layout?: boolean

    /**
     * Enable shared layout transitions between components for children of `AnimateSharedLayout`.
     *
     * When a component with a layoutId is removed from the React tree, and then
     * added elsewhere, it will visually animate from the previous component's bounding box
     * and its latest animated values.
     *
     * ```jsx
     * <AnimateSharedLayout>
     *   {items.map(item => (
     *      <motion.li layout>
     *         {item.name}
     *         {item.isSelected && <motion.div layoutId="underline" />}
     *      </motion.li>
     *   ))}
     * </AnimateSharedLayout>
     * ```
     *
     * If the previous component remains in the tree it will either get hidden immediately or,
     * if `type="crossfade"` is set on `AnimateSharedLayout`, it will crossfade to the new component.
     *
     * @public
     */
    layoutId?: string

    /**
     * A callback that will fire when a layout animation on this component completes.
     *
     * @public
     */
    onLayoutAnimationComplete: () => void

    /**
     * @internal
     */
    onViewportBoxUpdate?: (box: AxisBox2D) => void
}
