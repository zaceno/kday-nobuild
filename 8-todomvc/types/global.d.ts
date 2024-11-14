type Action<S, X> = import("hyperapp").Action<S, X>
type Subscription<S, X> = import("hyperapp").Subscription<S, X>
type Dispatch<S> = import("hyperapp").Dispatch<S>
type ElementVNode<S> = import("hyperapp").ElementVNode<S>
type Dispatchable<S, P = any> = import("hyperapp").Dispatchable<S, P>
type ActionLike<S, X, Y> = Action<S, X> | [Action<S, Y>, Y]
type ClassProp = import("hyperapp").ClassProp
type MaybeVNode<S> = import("hyperapp").MaybeVNode<S>
type View<S> = (state: S) => MaybeVNode<S>
type Subs<S> = (state: S) => (false | true | undefined | Subscription<S, any>)[]
type VNodeProps<S> = import("hyperapp").Props<S>
type Effect<S, X = any> = import("hyperapp").Effect<S, X>
type Effecter<S, X = any> = Effect<S, X>[0]
type Subscriber<S, X = any> = Subscription<S, X>[0]
