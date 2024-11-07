/** @odoo-module **/

import { registry } from "@web/core/registry";
import { listView } from "@web/views/list/list_view";
import { ListRenderer } from '@web/views/list/list_renderer';

import { onMounted, onWillUnmount } from "@odoo/owl"

export class SaleOrderListRenderer extends ListRenderer {
    setup() {
        super.setup();
        onMounted(async () => {
            this.interval = setInterval(() => {
                this.props.list.model.load();
            }, 5000)
        });
        onWillUnmount(() => {
            clearInterval(this.interval);
            this.interval = null;
        });
    }
}

export const SaleOrderListView = {
    ...listView,
    Renderer: SaleOrderListRenderer,
};

registry.category("views").add("auto_sync_tree", SaleOrderListView);
