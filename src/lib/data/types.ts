type WidgetId = string
type WidgetType = "folder" | "file" | "note"

type StorageTreeItem = {
    id: WidgetId
    type: WidgetType
    name: string
    children?: StorageTreeItem[]
}