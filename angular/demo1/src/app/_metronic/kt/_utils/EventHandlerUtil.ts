import {DataUtil} from './_DataUtil'
import {getUniqueIdWithPrefix} from './_TypesHelpers'

export interface EventMeta {
  name: string
  callback: Function
  one: boolean
  fired: boolean
}

export class EventHandlerUtil {
  static store: Map<string, Map<string, EventMeta>> = new Map()

  private static setEventMetasByName(name: string, metas: Map<string, EventMeta>): void {
    EventHandlerUtil.store.set(name, metas)
  }

  private static getEventMetasByName(name: string): Map<string, EventMeta> | undefined {
    return EventHandlerUtil.store.get(name)
  }

  private static setEventMetaByNameAndHandlerId(
    name: string,
    handlerId: string,
    meta: EventMeta
  ): void {
    let metas = EventHandlerUtil.getEventMetasByName(name)
    if (!metas) {
      metas = new Map()
    }

    metas.set(handlerId, meta)
    EventHandlerUtil.setEventMetasByName(name, metas)
  }

  private static getEventsMetaByHandlerId(name: string, handlerId: string): EventMeta | undefined {
    const metas = EventHandlerUtil.store.get(name)
    if (!metas) {
      return
    }

    return metas.get(handlerId)
  }

  private static setFiredByNameAndHandlerId(name: string, handerId: string, fired: boolean): void {
    const meta = EventHandlerUtil.getEventsMetaByHandlerId(name, handerId)
    if (!meta) {
      return
    }

    meta.fired = fired
    EventHandlerUtil.setEventMetaByNameAndHandlerId(name, handerId, meta)
  }

  private static addEvent(
    element: HTMLElement,
    name: string,
    callback: Function,
    one: boolean = false
  ) {
    const handlerId = getUniqueIdWithPrefix('event')
    DataUtil.set(element, name, handlerId)
    const meta: EventMeta = {
      name: name,
      callback: callback,
      one: one,
      fired: false,
    }

    EventHandlerUtil.setEventMetaByNameAndHandlerId(name, handlerId, meta)
  }

  private static removeEvent(element: HTMLElement, name: string) {
    const handlerId = DataUtil.get(element, name)
    if (!handlerId) {
      return
    }

    const metas = EventHandlerUtil.getEventMetasByName(name)
    if (!metas) {
      return
    }

    metas.delete(handlerId)
    EventHandlerUtil.setEventMetasByName(name, metas)
  }

  public static trigger(element: HTMLElement, name: string, e?: Event) {
    if (DataUtil.has(element, name)) {
      const handlerId = DataUtil.get(element, name)
      if (!handlerId) {
        return undefined
      }

      const handler = EventHandlerUtil.getEventsMetaByHandlerId(name, handlerId)
      if (handler) {
        if (handler.name === name) {
          if (handler.one === true) {
            if (handler.fired === false) {
              EventHandlerUtil.setFiredByNameAndHandlerId(name, handlerId, true)
              return handler.callback.call(this, e)
            }
          } else {
            return handler.callback.call(this, e)
          }
        }
      }
    }

    return null
  }

  public static on = function (element: HTMLElement, name: string, callBack: Function): void {
    EventHandlerUtil.addEvent(element, name, callBack, false)
  }

  public static one(element: HTMLElement, name: string, callBack: Function): void {
    EventHandlerUtil.addEvent(element, name, callBack, true)
  }

  public static off(element: HTMLElement, name: string): void {
    EventHandlerUtil.removeEvent(element, name)
  }
}
