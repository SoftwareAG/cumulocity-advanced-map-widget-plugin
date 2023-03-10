import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  CoreModule,
  HOOK_COMPONENTS,
  CommonModule,
  ModalModule,
} from "@c8y/ngx-components";

import { ContextWidgetConfig } from "@c8y/ngx-components/context-dashboard";
import { AdvancedMapWidgetConfig } from "./advanced-map-widget-config.component";
import { AdvancedMapWidgetComponent } from "./advanced-map-widget.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { SubDeviceResolverComponent } from "./sub-devices-selector/sub-device-resolver.component";
import { ModalModule as BsModalModule, BsModalRef } from "ngx-bootstrap/modal";
import { EventLineCreatorModalComponent } from "./event-line-creator/event-line-creator-modal.component";
import { TrackListComponent } from "./track-list/track-list.component";
import { DrawLineCreatorModalComponent } from "./draw-line-creator/draw-line-creator-modal.component";
import { AngularResizeEventModule } from "angular-resize-event";
import { HttpClientJsonpModule } from "@angular/common/http";
import { PopupComponent } from "./popup/popup.component";
import { LayerModalComponent } from "./layer-config/layer-modal.component";
import { LayerListComponent } from "./layer-config/layer-list.component";
import { AlarmQueryFormComponent } from "./layer-config/query-forms/alarm-query-form-component";
import { DynamicQueryFormComponent } from "./layer-config/query-forms/dynamic-query-form.component";
import { EventQueryFormComponent } from "./layer-config/query-forms/event-query-form.component";
import { InventoryQueryFormComponent } from "./layer-config/query-forms/inventory-query-form.component";
import { AlarmDisplayComponent } from "./popup/alarm-display/alarm-display.component";

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    LeafletModule,
    BsModalModule,
    ModalModule,
    AngularResizeEventModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    HttpClientJsonpModule,
  ],
  declarations: [
    AdvancedMapWidgetConfig,
    AdvancedMapWidgetComponent,
    SubDeviceResolverComponent,
    EventLineCreatorModalComponent,
    DrawLineCreatorModalComponent,
    LayerModalComponent,
    LayerListComponent,
    TrackListComponent,
    DynamicQueryFormComponent,
    AlarmQueryFormComponent,
    EventQueryFormComponent,
    InventoryQueryFormComponent,
    PopupComponent,
    AlarmDisplayComponent
  ],
  entryComponents: [
    AdvancedMapWidgetConfig,
    AdvancedMapWidgetComponent,
    EventLineCreatorModalComponent,
    DrawLineCreatorModalComponent,
    TrackListComponent,
    PopupComponent,
  ],
  providers: [
    BsModalRef,
    {
      provide: HOOK_COMPONENTS,
      multi: true,
      useValue: {
        id: "iot.cumulocity.advanced.map.widget",
        label: "Advanced map widget",
        description:
          "Displays a map with position markers for selected devices. Support for configuration of additional layers and custom markers.",
        component: AdvancedMapWidgetComponent,
        configComponent: AdvancedMapWidgetConfig,
        // comment this if you want to test the widget
        previewImage: require("./previewImage.png"),
        data: {
          settings: {
            noNewWidgets: false, // Set this to true, to don't allow adding new widgets.
            ng1: {
              options: {
                noDeviceTarget: false, // Set this to true to hide the device selector.
                groupsSelectable: true, // Set this, if not only devices should be selectable.
              },
            },
          },
        } as ContextWidgetConfig,
      },
    },
  ],
})
export class AdvancedMapWidgetModule {}
