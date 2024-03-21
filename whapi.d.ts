declare module "runtime" {
    export function exists(json: any, key: string): boolean;
    export function mapValues(data: any, fn: (item: any) => any): {};
}
declare module "models/Button" {
    /**
     *
     * @export
     * @interface Button
     */
    export interface Button {
        /**
         * Type of button
         * @type {string}
         * @memberof Button
         */
        type?: ButtonTypeEnum;
        /**
         * Button text
         * @type {string}
         * @memberof Button
         */
        title?: string;
        /**
         * Button ID
         * @type {string}
         * @memberof Button
         */
        id?: string;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum ButtonTypeEnum {
        reply = "reply",
        native = "native"
    }
    export function ButtonFromJSON(json: any): Button;
    export function ButtonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Button;
    export function ButtonToJSON(value?: Button | null): any;
}
declare module "models/ActionButtons" {
    import { Button } from "models/Button";
    /**
     *
     * @export
     * @interface ActionButtons
     */
    export interface ActionButtons {
        /**
         *
         * @type {Array<Button>}
         * @memberof ActionButtons
         */
        buttons?: Array<Button>;
    }
    export function ActionButtonsFromJSON(json: any): ActionButtons;
    export function ActionButtonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionButtons;
    export function ActionButtonsToJSON(value?: ActionButtons | null): any;
}
declare module "models/ActionListProductItems" {
    /**
     *
     * @export
     * @interface ActionListProductItems
     */
    export interface ActionListProductItems {
        /**
         * Catalog ID
         * @type {string}
         * @memberof ActionListProductItems
         */
        catalog_id?: string;
        /**
         * Product retailer ID
         * @type {string}
         * @memberof ActionListProductItems
         */
        product_retailer_id?: string;
    }
    export function ActionListProductItemsFromJSON(json: any): ActionListProductItems;
    export function ActionListProductItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionListProductItems;
    export function ActionListProductItemsToJSON(value?: ActionListProductItems | null): any;
}
declare module "models/ActionListRows" {
    /**
     *
     * @export
     * @interface ActionListRows
     */
    export interface ActionListRows {
        /**
         * Title of the row
         * @type {string}
         * @memberof ActionListRows
         */
        title?: string;
        /**
         * Description of the row
         * @type {string}
         * @memberof ActionListRows
         */
        description?: string;
        /**
         * Row ID
         * @type {string}
         * @memberof ActionListRows
         */
        id?: string;
    }
    export function ActionListRowsFromJSON(json: any): ActionListRows;
    export function ActionListRowsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionListRows;
    export function ActionListRowsToJSON(value?: ActionListRows | null): any;
}
declare module "models/ActionListSections" {
    import { ActionListProductItems } from "models/ActionListProductItems";
    import { ActionListRows } from "models/ActionListRows";
    /**
     *
     * @export
     * @interface ActionListSections
     */
    export interface ActionListSections {
        /**
         * Title of the section
         * @type {string}
         * @memberof ActionListSections
         */
        title?: string;
        /**
         * Rows of the section
         * @type {Array<ActionListRows>}
         * @memberof ActionListSections
         */
        rows?: Array<ActionListRows>;
        /**
         * Product items of the section
         * @type {Array<ActionListProductItems>}
         * @memberof ActionListSections
         */
        product_items?: Array<ActionListProductItems>;
    }
    export function ActionListSectionsFromJSON(json: any): ActionListSections;
    export function ActionListSectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionListSections;
    export function ActionListSectionsToJSON(value?: ActionListSections | null): any;
}
declare module "models/ActionList" {
    import { ActionListSections } from "models/ActionListSections";
    /**
     *
     * @export
     * @interface ActionList
     */
    export interface ActionList {
        /**
         * Section of the message
         * @type {Array<ActionListSections>}
         * @memberof ActionList
         */
        sections?: Array<ActionListSections>;
        /**
         * Button text for list of message
         * @type {string}
         * @memberof ActionList
         */
        button?: string;
    }
    export function ActionListFromJSON(json: any): ActionList;
    export function ActionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionList;
    export function ActionListToJSON(value?: ActionList | null): any;
}
declare module "models/ActionProduct" {
    /**
     *
     * @export
     * @interface ActionProduct
     */
    export interface ActionProduct {
        /**
         * Catalog ID
         * @type {string}
         * @memberof ActionProduct
         */
        catalog_id?: string;
        /**
         * Product retailer ID
         * @type {string}
         * @memberof ActionProduct
         */
        product_retailer_id?: string;
    }
    export function ActionProductFromJSON(json: any): ActionProduct;
    export function ActionProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionProduct;
    export function ActionProductToJSON(value?: ActionProduct | null): any;
}
declare module "models/ArchiveChatRequest" {
    /**
     *
     * @export
     * @interface ArchiveChatRequest
     */
    export interface ArchiveChatRequest {
        /**
         * Archive or unarchive chat
         * @type {boolean}
         * @memberof ArchiveChatRequest
         */
        archive?: boolean;
    }
    export function ArchiveChatRequestFromJSON(json: any): ArchiveChatRequest;
    export function ArchiveChatRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArchiveChatRequest;
    export function ArchiveChatRequestToJSON(value?: ArchiveChatRequest | null): any;
}
declare module "models/AuthCode" {
    /**
     * The auth code is the code that is used to authenticate in whatsapp
     * @export
     * @interface AuthCode
     */
    export interface AuthCode {
        /**
         * The auth code
         * @type {string}
         * @memberof AuthCode
         */
        code?: string;
    }
    export function AuthCodeFromJSON(json: any): AuthCode;
    export function AuthCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthCode;
    export function AuthCodeToJSON(value?: AuthCode | null): any;
}
declare module "models/ButtonsReply" {
    /**
     *
     * @export
     * @interface ButtonsReply
     */
    export interface ButtonsReply {
        /**
         * Clicked button ID
         * @type {string}
         * @memberof ButtonsReply
         */
        id?: string;
        /**
         * Clicked button text
         * @type {string}
         * @memberof ButtonsReply
         */
        title?: string;
    }
    export function ButtonsReplyFromJSON(json: any): ButtonsReply;
    export function ButtonsReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ButtonsReply;
    export function ButtonsReplyToJSON(value?: ButtonsReply | null): any;
}
declare module "models/CallEvent" {
    /**
     *
     * @export
     * @interface CallEvent
     */
    export interface CallEvent {
        /**
         * The ID of the call.
         * @type {string}
         * @memberof CallEvent
         */
        id?: string;
        /**
         * The ID of the chat that the call is associated with.
         * @type {string}
         * @memberof CallEvent
         */
        chat_id?: string;
        /**
         * The status of the call.
         * @type {string}
         * @memberof CallEvent
         */
        status?: CallEventStatusEnum;
        /**
         * The ID of the contact that initiated the call.
         * @type {string}
         * @memberof CallEvent
         */
        from?: string;
        /**
         * The timestamp of the call.
         * @type {number}
         * @memberof CallEvent
         */
        timestamp?: number;
        /**
         * Whether the call is a group call.
         * @type {boolean}
         * @memberof CallEvent
         */
        group_call?: boolean;
        /**
         * Whether the call is a video call.
         * @type {boolean}
         * @memberof CallEvent
         */
        video_call?: boolean;
        /**
         * Whether the call is an offline call.
         * @type {boolean}
         * @memberof CallEvent
         */
        offline_call?: boolean;
        /**
         * The latency of the call in milliseconds.
         * @type {number}
         * @memberof CallEvent
         */
        latency?: number;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum CallEventStatusEnum {
        initiated = "initiated",
        ringing = "ringing",
        missed = "missed",
        canceled = "canceled",
        answered = "answered"
    }
    export function CallEventFromJSON(json: any): CallEvent;
    export function CallEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallEvent;
    export function CallEventToJSON(value?: CallEvent | null): any;
}
declare module "models/ChannelStatus" {
    /**
     *
     * @export
     * @interface ChannelStatus
     */
    export interface ChannelStatus {
        /**
         * Status code
         * @type {number}
         * @memberof ChannelStatus
         */
        code: number;
        /**
         * Status text
         * @type {string}
         * @memberof ChannelStatus
         */
        text: ChannelStatusTextEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum ChannelStatusTextEnum {
        NOT_INIT = "NOT_INIT",
        INIT = "INIT",
        LAUNCH = "LAUNCH",
        QR = "QR",
        AUTH = "AUTH",
        ERROR = "ERROR"
    }
    export function ChannelStatusFromJSON(json: any): ChannelStatus;
    export function ChannelStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelStatus;
    export function ChannelStatusToJSON(value?: ChannelStatus | null): any;
}
declare module "models/Label" {
    /**
     *
     * @export
     * @interface Label
     */
    export interface Label {
        /**
         * Label ID
         * @type {string}
         * @memberof Label
         */
        id: string;
        /**
         * Label name
         * @type {string}
         * @memberof Label
         */
        name: string;
        /**
         * Label color
         * @type {string}
         * @memberof Label
         */
        color: LabelColorEnum;
        /**
         * Number of objects associated with this label
         * @type {number}
         * @memberof Label
         */
        count?: number;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum LabelColorEnum {
        salmon = "salmon",
        lightskyblue = "lightskyblue",
        gold = "gold",
        plum = "plum",
        silver = "silver",
        mediumturquoise = "mediumturquoise",
        violet = "violet",
        goldenrod = "goldenrod",
        cornflowerblue = "cornflowerblue",
        greenyellow = "greenyellow",
        cyan = "cyan",
        lightpink = "lightpink",
        mediumaquamarine = "mediumaquamarine",
        orangered = "orangered",
        deepskyblue = "deepskyblue",
        limegreen = "limegreen",
        darkorange = "darkorange",
        lightsteelblue = "lightsteelblue",
        mediumpurple = "mediumpurple",
        rebeccapurple = "rebeccapurple"
    }
    export function LabelFromJSON(json: any): Label;
    export function LabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Label;
    export function LabelToJSON(value?: Label | null): any;
}
declare module "models/MessageContentMedia" {
    /**
     *
     * @export
     * @interface MessageContentMedia
     */
    export interface MessageContentMedia {
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentMedia
         */
        id: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentMedia
         */
        link?: string;
        /**
         * Mime type of media
         * @type {string}
         * @memberof MessageContentMedia
         */
        mime_type: string;
        /**
         * File size in bytes
         * @type {number}
         * @memberof MessageContentMedia
         */
        file_size: number;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentMedia
         */
        sha256?: string;
    }
    export function MessageContentMediaFromJSON(json: any): MessageContentMedia;
    export function MessageContentMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentMedia;
    export function MessageContentMediaToJSON(value?: MessageContentMedia | null): any;
}
declare module "models/MessagePropsAudio" {
    /**
     *
     * @export
     * @interface MessagePropsAudio
     */
    export interface MessagePropsAudio {
        /**
         * Optional. For audio files, this field indicates the duration of the audio file in seconds.
         * @type {number}
         * @memberof MessagePropsAudio
         */
        seconds?: number;
    }
    export function MessagePropsAudioFromJSON(json: any): MessagePropsAudio;
    export function MessagePropsAudioFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsAudio;
    export function MessagePropsAudioToJSON(value?: MessagePropsAudio | null): any;
}
declare module "models/MessagePropsVoice" {
    /**
     *
     * @export
     * @interface MessagePropsVoice
     */
    export interface MessagePropsVoice {
        /**
         * Optional. For audio files, this field indicates the duration of the audio file in seconds.
         * @type {number}
         * @memberof MessagePropsVoice
         */
        seconds?: number;
        /**
         * Time in seconds to simulate recording voice
         * @type {number}
         * @memberof MessagePropsVoice
         */
        recording_time?: number;
    }
    export function MessagePropsVoiceFromJSON(json: any): MessagePropsVoice;
    export function MessagePropsVoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsVoice;
    export function MessagePropsVoiceToJSON(value?: MessagePropsVoice | null): any;
}
declare module "models/ViewOnce" {
    /**
     *
     * @export
     * @interface ViewOnce
     */
    export interface ViewOnce {
        /**
         * Is view once
         * @type {boolean}
         * @memberof ViewOnce
         */
        view_once?: boolean;
    }
    export function ViewOnceFromJSON(json: any): ViewOnce;
    export function ViewOnceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewOnce;
    export function ViewOnceToJSON(value?: ViewOnce | null): any;
}
declare module "models/MessageContentAudio" {
    /**
     *
     * @export
     * @interface MessageContentAudio
     */
    export interface MessageContentAudio {
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentAudio
         */
        id: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentAudio
         */
        link?: string;
        /**
         * Mime type of media
         * @type {string}
         * @memberof MessageContentAudio
         */
        mime_type: string;
        /**
         * File size in bytes
         * @type {number}
         * @memberof MessageContentAudio
         */
        file_size: number;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentAudio
         */
        sha256?: string;
        /**
         * Optional. For audio files, this field indicates the duration of the audio file in seconds.
         * @type {number}
         * @memberof MessageContentAudio
         */
        seconds?: number;
        /**
         * Time in seconds to simulate recording voice
         * @type {number}
         * @memberof MessageContentAudio
         */
        recording_time?: number;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentAudio
         */
        view_once?: boolean;
    }
    export function MessageContentAudioFromJSON(json: any): MessageContentAudio;
    export function MessageContentAudioFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentAudio;
    export function MessageContentAudioToJSON(value?: MessageContentAudio | null): any;
}
declare module "models/VCard" {
    /**
     *
     * @export
     * @interface VCard
     */
    export interface VCard {
        /**
         * Name of contact
         * @type {string}
         * @memberof VCard
         */
        name: string;
        /**
         * Vcard of contact
         * @type {string}
         * @memberof VCard
         */
        vcard: string;
    }
    export function VCardFromJSON(json: any): VCard;
    export function VCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): VCard;
    export function VCardToJSON(value?: VCard | null): any;
}
declare module "models/MessageContentContact" {
    /**
     *
     * @export
     * @interface MessageContentContact
     */
    export interface MessageContentContact {
        /**
         * Name of contact
         * @type {string}
         * @memberof MessageContentContact
         */
        name: string;
        /**
         * Vcard of contact
         * @type {string}
         * @memberof MessageContentContact
         */
        vcard: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentContact
         */
        view_once?: boolean;
    }
    export function MessageContentContactFromJSON(json: any): MessageContentContact;
    export function MessageContentContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentContact;
    export function MessageContentContactToJSON(value?: MessageContentContact | null): any;
}
declare module "models/MessageContentContacts" {
    import { VCard } from "models/VCard";
    /**
     *
     * @export
     * @interface MessageContentContacts
     */
    export interface MessageContentContacts {
        /**
         *
         * @type {Array<VCard>}
         * @memberof MessageContentContacts
         */
        list?: Array<VCard>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentContacts
         */
        view_once?: boolean;
    }
    export function MessageContentContactsFromJSON(json: any): MessageContentContacts;
    export function MessageContentContactsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentContacts;
    export function MessageContentContactsToJSON(value?: MessageContentContacts | null): any;
}
declare module "models/MessagePropsDocument" {
    /**
     *
     * @export
     * @interface MessagePropsDocument
     */
    export interface MessagePropsDocument {
        /**
         * Optional. Text caption under the document.
         * @type {string}
         * @memberof MessagePropsDocument
         */
        caption?: string;
        /**
         * Optional. File name
         * @type {string}
         * @memberof MessagePropsDocument
         */
        filename?: string;
    }
    export function MessagePropsDocumentFromJSON(json: any): MessagePropsDocument;
    export function MessagePropsDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsDocument;
    export function MessagePropsDocumentToJSON(value?: MessagePropsDocument | null): any;
}
declare module "models/MessageContentDocument" {
    import { Button } from "models/Button";
    /**
     *
     * @export
     * @interface MessageContentDocument
     */
    export interface MessageContentDocument {
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentDocument
         */
        id: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentDocument
         */
        link?: string;
        /**
         * Mime type of media
         * @type {string}
         * @memberof MessageContentDocument
         */
        mime_type: string;
        /**
         * File size in bytes
         * @type {number}
         * @memberof MessageContentDocument
         */
        file_size: number;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentDocument
         */
        sha256?: string;
        /**
         * Optional. Text caption under the document.
         * @type {string}
         * @memberof MessageContentDocument
         */
        caption?: string;
        /**
         * Optional. File name
         * @type {string}
         * @memberof MessageContentDocument
         */
        filename?: string;
        /**
         * Optional. Number of pages
         * @type {number}
         * @memberof MessageContentDocument
         */
        page_count?: number;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof MessageContentDocument
         */
        preview?: string;
        /**
         *
         * @type {Array<Button>}
         * @memberof MessageContentDocument
         */
        buttons?: Array<Button>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentDocument
         */
        view_once?: boolean;
    }
    export function MessageContentDocumentFromJSON(json: any): MessageContentDocument;
    export function MessageContentDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentDocument;
    export function MessageContentDocumentToJSON(value?: MessageContentDocument | null): any;
}
declare module "models/Size" {
    /**
     *
     * @export
     * @interface Size
     */
    export interface Size {
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof Size
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof Size
         */
        height?: number;
    }
    export function SizeFromJSON(json: any): Size;
    export function SizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Size;
    export function SizeToJSON(value?: Size | null): any;
}
declare module "models/MessagePropsImageOrVideo" {
    /**
     *
     * @export
     * @interface MessagePropsImageOrVideo
     */
    export interface MessagePropsImageOrVideo {
        /**
         * Optional. Text caption under the media.
         * @type {string}
         * @memberof MessagePropsImageOrVideo
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof MessagePropsImageOrVideo
         */
        preview?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof MessagePropsImageOrVideo
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof MessagePropsImageOrVideo
         */
        height?: number;
    }
    export function MessagePropsImageOrVideoFromJSON(json: any): MessagePropsImageOrVideo;
    export function MessagePropsImageOrVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsImageOrVideo;
    export function MessagePropsImageOrVideoToJSON(value?: MessagePropsImageOrVideo | null): any;
}
declare module "models/MessageContentImage" {
    import { Button } from "models/Button";
    /**
     *
     * @export
     * @interface MessageContentImage
     */
    export interface MessageContentImage {
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentImage
         */
        id: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentImage
         */
        link?: string;
        /**
         * Mime type of media
         * @type {string}
         * @memberof MessageContentImage
         */
        mime_type: string;
        /**
         * File size in bytes
         * @type {number}
         * @memberof MessageContentImage
         */
        file_size: number;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentImage
         */
        sha256?: string;
        /**
         * Optional. Text caption under the media.
         * @type {string}
         * @memberof MessageContentImage
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof MessageContentImage
         */
        preview?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof MessageContentImage
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof MessageContentImage
         */
        height?: number;
        /**
         *
         * @type {Array<Button>}
         * @memberof MessageContentImage
         */
        buttons?: Array<Button>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentImage
         */
        view_once?: boolean;
    }
    export function MessageContentImageFromJSON(json: any): MessageContentImage;
    export function MessageContentImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentImage;
    export function MessageContentImageToJSON(value?: MessageContentImage | null): any;
}
declare module "models/InteractiveType" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    /**
     * Interactive type
     * @export
     * @enum {string}
     */
    export enum InteractiveType {
        list = "list",
        button = "button",
        product = "product"
    }
    export function InteractiveTypeFromJSON(json: any): InteractiveType;
    export function InteractiveTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InteractiveType;
    export function InteractiveTypeToJSON(value?: InteractiveType | null): any;
}
declare module "models/MessagePropsInteractiveBody" {
    /**
     * Body of interactive
     * @export
     * @interface MessagePropsInteractiveBody
     */
    export interface MessagePropsInteractiveBody {
        /**
         * Text of body
         * @type {string}
         * @memberof MessagePropsInteractiveBody
         */
        text?: string;
    }
    export function MessagePropsInteractiveBodyFromJSON(json: any): MessagePropsInteractiveBody;
    export function MessagePropsInteractiveBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsInteractiveBody;
    export function MessagePropsInteractiveBodyToJSON(value?: MessagePropsInteractiveBody | null): any;
}
declare module "models/MessagePropsInteractiveFooter" {
    /**
     * Footer of interactive
     * @export
     * @interface MessagePropsInteractiveFooter
     */
    export interface MessagePropsInteractiveFooter {
        /**
         * Text of footer
         * @type {string}
         * @memberof MessagePropsInteractiveFooter
         */
        text?: string;
    }
    export function MessagePropsInteractiveFooterFromJSON(json: any): MessagePropsInteractiveFooter;
    export function MessagePropsInteractiveFooterFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsInteractiveFooter;
    export function MessagePropsInteractiveFooterToJSON(value?: MessagePropsInteractiveFooter | null): any;
}
declare module "models/HeaderType" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    /**
     * Interactive type
     * @export
     * @enum {string}
     */
    export enum HeaderType {
        text = "text",
        image = "image",
        video = "video",
        document = "document"
    }
    export function HeaderTypeFromJSON(json: any): HeaderType;
    export function HeaderTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderType;
    export function HeaderTypeToJSON(value?: HeaderType | null): any;
}
declare module "models/MessagePropsInteractiveHeader" {
    import { HeaderType } from "models/HeaderType";
    /**
     * Header of interactive message (required for type product_list)
     * @export
     * @interface MessagePropsInteractiveHeader
     */
    export interface MessagePropsInteractiveHeader {
        /**
         *
         * @type {HeaderType}
         * @memberof MessagePropsInteractiveHeader
         */
        type?: HeaderType;
        /**
         * Text of header
         * @type {string}
         * @memberof MessagePropsInteractiveHeader
         */
        text?: string;
        /**
         * Image of header (for sending use media parameter)
         * @type {string}
         * @memberof MessagePropsInteractiveHeader
         */
        image?: string;
        /**
         * Image of header (for sending use media parameter)
         * @type {string}
         * @memberof MessagePropsInteractiveHeader
         */
        video?: string;
        /**
         * Image of header (for sending use media parameter)
         * @type {string}
         * @memberof MessagePropsInteractiveHeader
         */
        document?: string;
    }
    export function MessagePropsInteractiveHeaderFromJSON(json: any): MessagePropsInteractiveHeader;
    export function MessagePropsInteractiveHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsInteractiveHeader;
    export function MessagePropsInteractiveHeaderToJSON(value?: MessagePropsInteractiveHeader | null): any;
}
declare module "models/MessagePropsInteractive" {
    import { ActionProduct } from "models/ActionProduct";
    import { InteractiveType } from "models/InteractiveType";
    import { MessagePropsInteractiveBody } from "models/MessagePropsInteractiveBody";
    import { MessagePropsInteractiveFooter } from "models/MessagePropsInteractiveFooter";
    import { MessagePropsInteractiveHeader } from "models/MessagePropsInteractiveHeader";
    /**
     *
     * @export
     * @interface MessagePropsInteractive
     */
    export interface MessagePropsInteractive {
        /**
         *
         * @type {InteractiveType}
         * @memberof MessagePropsInteractive
         */
        type?: InteractiveType;
        /**
         *
         * @type {MessagePropsInteractiveHeader}
         * @memberof MessagePropsInteractive
         */
        header?: MessagePropsInteractiveHeader;
        /**
         *
         * @type {MessagePropsInteractiveBody}
         * @memberof MessagePropsInteractive
         */
        body?: MessagePropsInteractiveBody;
        /**
         *
         * @type {MessagePropsInteractiveFooter}
         * @memberof MessagePropsInteractive
         */
        footer?: MessagePropsInteractiveFooter;
        /**
         *
         * @type {ActionProduct}
         * @memberof MessagePropsInteractive
         */
        action?: ActionProduct;
    }
    export function MessagePropsInteractiveFromJSON(json: any): MessagePropsInteractive;
    export function MessagePropsInteractiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsInteractive;
    export function MessagePropsInteractiveToJSON(value?: MessagePropsInteractive | null): any;
}
declare module "models/MessageContentInteractive" {
    import { ActionProduct } from "models/ActionProduct";
    import { InteractiveType } from "models/InteractiveType";
    import { MessagePropsInteractiveBody } from "models/MessagePropsInteractiveBody";
    import { MessagePropsInteractiveFooter } from "models/MessagePropsInteractiveFooter";
    import { MessagePropsInteractiveHeader } from "models/MessagePropsInteractiveHeader";
    /**
     *
     * @export
     * @interface MessageContentInteractive
     */
    export interface MessageContentInteractive {
        /**
         *
         * @type {InteractiveType}
         * @memberof MessageContentInteractive
         */
        type?: InteractiveType;
        /**
         *
         * @type {MessagePropsInteractiveHeader}
         * @memberof MessageContentInteractive
         */
        header?: MessagePropsInteractiveHeader;
        /**
         *
         * @type {MessagePropsInteractiveBody}
         * @memberof MessageContentInteractive
         */
        body?: MessagePropsInteractiveBody;
        /**
         *
         * @type {MessagePropsInteractiveFooter}
         * @memberof MessageContentInteractive
         */
        footer?: MessagePropsInteractiveFooter;
        /**
         *
         * @type {ActionProduct}
         * @memberof MessageContentInteractive
         */
        action?: ActionProduct;
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentInteractive
         */
        id: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentInteractive
         */
        link?: string;
        /**
         * Mime type of media
         * @type {string}
         * @memberof MessageContentInteractive
         */
        mime_type: string;
        /**
         * File size in bytes
         * @type {number}
         * @memberof MessageContentInteractive
         */
        file_size: number;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentInteractive
         */
        sha256?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentInteractive
         */
        view_once?: boolean;
    }
    export function MessageContentInteractiveFromJSON(json: any): MessageContentInteractive;
    export function MessageContentInteractiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentInteractive;
    export function MessageContentInteractiveToJSON(value?: MessageContentInteractive | null): any;
}
declare module "models/MessagePropsLinkPreview" {
    /**
     * If 'body' contains a link, this props can be used to create custom preview link
     * @export
     * @interface MessagePropsLinkPreview
     */
    export interface MessagePropsLinkPreview {
        /**
         * Title of the link
         * @type {string}
         * @memberof MessagePropsLinkPreview
         */
        title: string;
        /**
         * Description of the link
         * @type {string}
         * @memberof MessagePropsLinkPreview
         */
        description?: string;
        /**
         * Canonical URL of the link (for example, if the link is shortened)
         * @type {string}
         * @memberof MessagePropsLinkPreview
         */
        canonical?: string;
        /**
         * Base64 encoded image for mini version link preview. In JPEG format
         * @type {string}
         * @memberof MessagePropsLinkPreview
         */
        preview?: string;
    }
    export function MessagePropsLinkPreviewFromJSON(json: any): MessagePropsLinkPreview;
    export function MessagePropsLinkPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsLinkPreview;
    export function MessagePropsLinkPreviewToJSON(value?: MessagePropsLinkPreview | null): any;
}
declare module "models/MessagePropsText" {
    /**
     *
     * @export
     * @interface MessagePropsText
     */
    export interface MessagePropsText {
        /**
         * Message text
         * @type {string}
         * @memberof MessagePropsText
         */
        body: string;
    }
    export function MessagePropsTextFromJSON(json: any): MessagePropsText;
    export function MessagePropsTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsText;
    export function MessagePropsTextToJSON(value?: MessagePropsText | null): any;
}
declare module "models/MessageContentLinkPreview" {
    /**
     *
     * @export
     * @interface MessageContentLinkPreview
     */
    export interface MessageContentLinkPreview {
        /**
         * Message text
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        body: string;
        /**
         * URL of the link
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        url?: string;
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        id?: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        link?: string;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        sha256?: string;
        /**
         * Title of the link
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        title: string;
        /**
         * Description of the link
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        description?: string;
        /**
         * Canonical URL of the link (for example, if the link is shortened)
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        canonical?: string;
        /**
         * Base64 encoded image for mini version link preview. In JPEG format
         * @type {string}
         * @memberof MessageContentLinkPreview
         */
        preview?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentLinkPreview
         */
        view_once?: boolean;
    }
    export function MessageContentLinkPreviewFromJSON(json: any): MessageContentLinkPreview;
    export function MessageContentLinkPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentLinkPreview;
    export function MessageContentLinkPreviewToJSON(value?: MessageContentLinkPreview | null): any;
}
declare module "models/MessageContentLiveLocation" {
    /**
     *
     * @export
     * @interface MessageContentLiveLocation
     */
    export interface MessageContentLiveLocation {
        /**
         * Latitude of live location being sent
         * @type {number}
         * @memberof MessageContentLiveLocation
         */
        latitude: number;
        /**
         * Longitude of live location being sent
         * @type {number}
         * @memberof MessageContentLiveLocation
         */
        longitude: number;
        /**
         * Accuracy of the live location in meters
         * @type {number}
         * @memberof MessageContentLiveLocation
         */
        accuracy?: number;
        /**
         * Speed of the live location in meters per second
         * @type {number}
         * @memberof MessageContentLiveLocation
         */
        speed?: number;
        /**
         * Degrees clockwise from true north
         * @type {number}
         * @memberof MessageContentLiveLocation
         */
        degrees?: number;
        /**
         * Optional. Text caption under the live location
         * @type {string}
         * @memberof MessageContentLiveLocation
         */
        caption?: string;
        /**
         * Optional. Sequence number of the live location for event tracking
         * @type {number}
         * @memberof MessageContentLiveLocation
         */
        sequence_number?: number;
        /**
         * Optional. Time offset of the live location
         * @type {number}
         * @memberof MessageContentLiveLocation
         */
        time_offset?: number;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof MessageContentLiveLocation
         */
        preview?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentLiveLocation
         */
        view_once?: boolean;
    }
    export function MessageContentLiveLocationFromJSON(json: any): MessageContentLiveLocation;
    export function MessageContentLiveLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentLiveLocation;
    export function MessageContentLiveLocationToJSON(value?: MessageContentLiveLocation | null): any;
}
declare module "models/MessageContentLocation" {
    /**
     *
     * @export
     * @interface MessageContentLocation
     */
    export interface MessageContentLocation {
        /**
         * Latitude of location being sent
         * @type {number}
         * @memberof MessageContentLocation
         */
        latitude: number;
        /**
         * Longitude of location being sent
         * @type {number}
         * @memberof MessageContentLocation
         */
        longitude: number;
        /**
         * Address of the location
         * @type {string}
         * @memberof MessageContentLocation
         */
        address?: string;
        /**
         * Name of the location
         * @type {string}
         * @memberof MessageContentLocation
         */
        name?: string;
        /**
         * URL for the website where the user downloaded the location information
         * @type {string}
         * @memberof MessageContentLocation
         */
        url?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof MessageContentLocation
         */
        preview?: string;
        /**
         * Accuracy of the location in meters
         * @type {number}
         * @memberof MessageContentLocation
         */
        accuracy?: number;
        /**
         * Speed of the location in meters per second
         * @type {number}
         * @memberof MessageContentLocation
         */
        speed?: number;
        /**
         * Degrees clockwise from true north
         * @type {number}
         * @memberof MessageContentLocation
         */
        degrees?: number;
        /**
         * Optional. Comment for the location
         * @type {string}
         * @memberof MessageContentLocation
         */
        comment?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentLocation
         */
        view_once?: boolean;
    }
    export function MessageContentLocationFromJSON(json: any): MessageContentLocation;
    export function MessageContentLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentLocation;
    export function MessageContentLocationToJSON(value?: MessageContentLocation | null): any;
}
declare module "models/MessagePropsPoll" {
    /**
     *
     * @export
     * @interface MessagePropsPoll
     */
    export interface MessagePropsPoll {
        /**
         * Title of poll
         * @type {string}
         * @memberof MessagePropsPoll
         */
        title: string;
        /**
         * Options of poll
         * @type {Array<string>}
         * @memberof MessagePropsPoll
         */
        options: Array<string>;
        /**
         * Number of selectable options in poll (max is options.length)
         * @type {number}
         * @memberof MessagePropsPoll
         */
        count?: number;
    }
    export function MessagePropsPollFromJSON(json: any): MessagePropsPoll;
    export function MessagePropsPollFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsPoll;
    export function MessagePropsPollToJSON(value?: MessagePropsPoll | null): any;
}
declare module "models/PollResults" {
    /**
     *
     * @export
     * @interface PollResults
     */
    export interface PollResults {
        /**
         * option ID
         * @type {string}
         * @memberof PollResults
         */
        id: string;
        /**
         * option name
         * @type {string}
         * @memberof PollResults
         */
        name: string;
        /**
         * Number of votes for this option
         * @type {number}
         * @memberof PollResults
         */
        count: number;
        /**
         * List of users who voted for this option
         * @type {Array<string>}
         * @memberof PollResults
         */
        voters: Array<string>;
    }
    export function PollResultsFromJSON(json: any): PollResults;
    export function PollResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PollResults;
    export function PollResultsToJSON(value?: PollResults | null): any;
}
declare module "models/MessageContentPoll" {
    import { PollResults } from "models/PollResults";
    /**
     *
     * @export
     * @interface MessageContentPoll
     */
    export interface MessageContentPoll {
        /**
         * Title of poll
         * @type {string}
         * @memberof MessageContentPoll
         */
        title: string;
        /**
         * Options of poll
         * @type {Array<string>}
         * @memberof MessageContentPoll
         */
        options: Array<string>;
        /**
         * Number of selectable options in poll (max is options.length)
         * @type {number}
         * @memberof MessageContentPoll
         */
        count?: number;
        /**
         *
         * @type {Array<PollResults>}
         * @memberof MessageContentPoll
         */
        results?: Array<PollResults>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentPoll
         */
        view_once?: boolean;
    }
    export function MessageContentPollFromJSON(json: any): MessageContentPoll;
    export function MessageContentPollFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentPoll;
    export function MessageContentPollToJSON(value?: MessageContentPoll | null): any;
}
declare module "models/ListReply" {
    /**
     *
     * @export
     * @interface ListReply
     */
    export interface ListReply {
        /**
         * Clicked list ID
         * @type {string}
         * @memberof ListReply
         */
        id?: string;
        /**
         * Clicked list title
         * @type {string}
         * @memberof ListReply
         */
        title?: string;
        /**
         * Clicked list description
         * @type {string}
         * @memberof ListReply
         */
        description?: string;
    }
    export function ListReplyFromJSON(json: any): ListReply;
    export function ListReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListReply;
    export function ListReplyToJSON(value?: ListReply | null): any;
}
declare module "models/MessageContentReply" {
    import { ButtonsReply } from "models/ButtonsReply";
    import { ListReply } from "models/ListReply";
    /**
     *
     * @export
     * @interface MessageContentReply
     */
    export interface MessageContentReply {
        /**
         * Type of message content
         * @type {string}
         * @memberof MessageContentReply
         */
        type?: MessageContentReplyTypeEnum;
        /**
         *
         * @type {ListReply}
         * @memberof MessageContentReply
         */
        list_reply?: ListReply;
        /**
         *
         * @type {ButtonsReply}
         * @memberof MessageContentReply
         */
        buttons_reply?: ButtonsReply;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum MessageContentReplyTypeEnum {
        list_reply = "list_reply",
        buttons_reply = "buttons_reply"
    }
    export function MessageContentReplyFromJSON(json: any): MessageContentReply;
    export function MessageContentReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentReply;
    export function MessageContentReplyToJSON(value?: MessageContentReply | null): any;
}
declare module "models/MessagePropsSticker" {
    /**
     *
     * @export
     * @interface MessagePropsSticker
     */
    export interface MessagePropsSticker {
        /**
         * Optional. For stickers, this field indicates whether the sticker is animated.
         * @type {boolean}
         * @memberof MessagePropsSticker
         */
        animated?: boolean;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof MessagePropsSticker
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof MessagePropsSticker
         */
        height?: number;
    }
    export function MessagePropsStickerFromJSON(json: any): MessagePropsSticker;
    export function MessagePropsStickerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsSticker;
    export function MessagePropsStickerToJSON(value?: MessagePropsSticker | null): any;
}
declare module "models/MessageContentSticker" {
    /**
     *
     * @export
     * @interface MessageContentSticker
     */
    export interface MessageContentSticker {
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentSticker
         */
        id: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentSticker
         */
        link?: string;
        /**
         * Mime type of media
         * @type {string}
         * @memberof MessageContentSticker
         */
        mime_type: string;
        /**
         * File size in bytes
         * @type {number}
         * @memberof MessageContentSticker
         */
        file_size: number;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentSticker
         */
        sha256?: string;
        /**
         * Optional. For stickers, this field indicates whether the sticker is animated.
         * @type {boolean}
         * @memberof MessageContentSticker
         */
        animated?: boolean;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof MessageContentSticker
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof MessageContentSticker
         */
        height?: number;
        /**
         * Optional. Base64 encoded preview of the media. In PNG format.
         * @type {string}
         * @memberof MessageContentSticker
         */
        preview?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentSticker
         */
        view_once?: boolean;
    }
    export function MessageContentStickerFromJSON(json: any): MessageContentSticker;
    export function MessageContentStickerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentSticker;
    export function MessageContentStickerToJSON(value?: MessageContentSticker | null): any;
}
declare module "models/MessageContentText" {
    import { ActionListSections } from "models/ActionListSections";
    import { Button } from "models/Button";
    /**
     *
     * @export
     * @interface MessageContentText
     */
    export interface MessageContentText {
        /**
         * Message text
         * @type {string}
         * @memberof MessageContentText
         */
        body: string;
        /**
         *
         * @type {Array<Button>}
         * @memberof MessageContentText
         */
        buttons?: Array<Button>;
        /**
         * Section of the message
         * @type {Array<ActionListSections>}
         * @memberof MessageContentText
         */
        sections?: Array<ActionListSections>;
        /**
         * Button text for list of message
         * @type {string}
         * @memberof MessageContentText
         */
        button?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentText
         */
        view_once?: boolean;
    }
    export function MessageContentTextFromJSON(json: any): MessageContentText;
    export function MessageContentTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentText;
    export function MessageContentTextToJSON(value?: MessageContentText | null): any;
}
declare module "models/MessageContentVideo" {
    import { Button } from "models/Button";
    /**
     *
     * @export
     * @interface MessageContentVideo
     */
    export interface MessageContentVideo {
        /**
         * Media ID
         * @type {string}
         * @memberof MessageContentVideo
         */
        id: string;
        /**
         * Optional. Link to media
         * @type {string}
         * @memberof MessageContentVideo
         */
        link?: string;
        /**
         * Mime type of media
         * @type {string}
         * @memberof MessageContentVideo
         */
        mime_type: string;
        /**
         * File size in bytes
         * @type {number}
         * @memberof MessageContentVideo
         */
        file_size: number;
        /**
         * Checksum
         * @type {string}
         * @memberof MessageContentVideo
         */
        sha256?: string;
        /**
         * Optional. Text caption under the media.
         * @type {string}
         * @memberof MessageContentVideo
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof MessageContentVideo
         */
        preview?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof MessageContentVideo
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof MessageContentVideo
         */
        height?: number;
        /**
         * Optional. For video files, this field indicates the duration of the video file in seconds.
         * @type {number}
         * @memberof MessageContentVideo
         */
        seconds?: number;
        /**
         * Optional. If the media is a GIF, this field indicates whether the GIF should be played automatically when the message is received.
         * @type {boolean}
         * @memberof MessageContentVideo
         */
        autoplay?: boolean;
        /**
         *
         * @type {Array<Button>}
         * @memberof MessageContentVideo
         */
        buttons?: Array<Button>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof MessageContentVideo
         */
        view_once?: boolean;
    }
    export function MessageContentVideoFromJSON(json: any): MessageContentVideo;
    export function MessageContentVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentVideo;
    export function MessageContentVideoToJSON(value?: MessageContentVideo | null): any;
}
declare module "models/MessageContent" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    import { MessageContentAudio } from "models/MessageContentAudio";
    import { MessageContentContact } from "models/MessageContentContact";
    import { MessageContentContacts } from "models/MessageContentContacts";
    import { MessageContentDocument } from "models/MessageContentDocument";
    import { MessageContentImage } from "models/MessageContentImage";
    import { MessageContentInteractive } from "models/MessageContentInteractive";
    import { MessageContentLinkPreview } from "models/MessageContentLinkPreview";
    import { MessageContentLiveLocation } from "models/MessageContentLiveLocation";
    import { MessageContentLocation } from "models/MessageContentLocation";
    import { MessageContentPoll } from "models/MessageContentPoll";
    import { MessageContentReply } from "models/MessageContentReply";
    import { MessageContentSticker } from "models/MessageContentSticker";
    import { MessageContentText } from "models/MessageContentText";
    import { MessageContentVideo } from "models/MessageContentVideo";
    /**
     * @type MessageContent
     *
     * @export
     */
    export type MessageContent = MessageContentAudio | MessageContentContact | MessageContentContacts | MessageContentDocument | MessageContentImage | MessageContentInteractive | MessageContentLinkPreview | MessageContentLiveLocation | MessageContentLocation | MessageContentPoll | MessageContentReply | MessageContentSticker | MessageContentText | MessageContentVideo;
    export function MessageContentFromJSON(json: any): MessageContent;
    export function MessageContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContent;
    export function MessageContentToJSON(value?: MessageContent | null): any;
}
declare module "models/MessageType" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    /**
     * Message type
     * @export
     * @enum {string}
     */
    export enum MessageType {
        text = "text",
        image = "image",
        video = "video",
        gif = "gif",
        audio = "audio",
        voice = "voice",
        document = "document",
        link_preview = "link_preview",
        location = "location",
        live_location = "live_location",
        contact = "contact",
        contact_list = "contact_list",
        sticker = "sticker",
        system = "system",
        call = "call",
        unknown = "unknown",
        action = "action",
        group_invite = "group_invite",
        product = "product",
        interactive = "interactive",
        reply = "reply",
        poll = "poll",
        hsm = "hsm"
    }
    export function MessageTypeFromJSON(json: any): MessageType;
    export function MessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageType;
    export function MessageTypeToJSON(value?: MessageType | null): any;
}
declare module "models/MessageAction" {
    import { MessageContent } from "models/MessageContent";
    import { MessageType } from "models/MessageType";
    /**
     *
     * @export
     * @interface MessageAction
     */
    export interface MessageAction {
        /**
         * Target message ID or chat ID
         * @type {string}
         * @memberof MessageAction
         */
        target?: string;
        /**
         * Type of action
         * @type {string}
         * @memberof MessageAction
         */
        type: MessageActionTypeEnum;
        /**
         * Action emoji for reaction
         * @type {string}
         * @memberof MessageAction
         */
        emoji?: string;
        /**
         * Ephemeral message duration
         * @type {number}
         * @memberof MessageAction
         */
        ephemeral?: number;
        /**
         *
         * @type {MessageType}
         * @memberof MessageAction
         */
        edited_type?: MessageType;
        /**
         *
         * @type {MessageContent}
         * @memberof MessageAction
         */
        edited_content?: MessageContent;
        /**
         * List of poll options
         * @type {Array<string>}
         * @memberof MessageAction
         */
        votes?: Array<string>;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum MessageActionTypeEnum {
        edit = "edit",
        delete = "delete",
        reaction = "reaction",
        ephemeral = "ephemeral",
        vote = "vote"
    }
    export function MessageActionFromJSON(json: any): MessageAction;
    export function MessageActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageAction;
    export function MessageActionToJSON(value?: MessageAction | null): any;
}
declare module "models/HSMButton" {
    /**
     *
     * @export
     * @interface HSMButton
     */
    export interface HSMButton {
        /**
         * ID of the button
         * @type {string}
         * @memberof HSMButton
         */
        id?: string;
        /**
         * Type of button
         * @type {string}
         * @memberof HSMButton
         */
        type?: HSMButtonTypeEnum;
        /**
         * Button text
         * @type {string}
         * @memberof HSMButton
         */
        text?: string;
        /**
         * URL
         * @type {string}
         * @memberof HSMButton
         */
        url?: string;
        /**
         * Phone number
         * @type {string}
         * @memberof HSMButton
         */
        phone_number?: string;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum HSMButtonTypeEnum {
        simple = "simple",
        reply = "reply",
        url = "url",
        phone_number = "phone_number"
    }
    export function HSMButtonFromJSON(json: any): HSMButton;
    export function HSMButtonFromJSONTyped(json: any, ignoreDiscriminator: boolean): HSMButton;
    export function HSMButtonToJSON(value?: HSMButton | null): any;
}
declare module "models/MessageContentHSMHeader" {
    import { MessageContentLocation } from "models/MessageContentLocation";
    import { MessageContentMedia } from "models/MessageContentMedia";
    import { MessagePropsText } from "models/MessagePropsText";
    /**
     * Header
     * @export
     * @interface MessageContentHSMHeader
     */
    export interface MessageContentHSMHeader {
        /**
         * Header type
         * @type {string}
         * @memberof MessageContentHSMHeader
         */
        type?: MessageContentHSMHeaderTypeEnum;
        /**
         *
         * @type {MessagePropsText}
         * @memberof MessageContentHSMHeader
         */
        text?: MessagePropsText;
        /**
         *
         * @type {MessageContentMedia}
         * @memberof MessageContentHSMHeader
         */
        image?: MessageContentMedia;
        /**
         *
         * @type {MessageContentMedia}
         * @memberof MessageContentHSMHeader
         */
        video?: MessageContentMedia;
        /**
         *
         * @type {MessageContentMedia}
         * @memberof MessageContentHSMHeader
         */
        document?: MessageContentMedia;
        /**
         *
         * @type {MessageContentLocation}
         * @memberof MessageContentHSMHeader
         */
        location?: MessageContentLocation;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum MessageContentHSMHeaderTypeEnum {
        text = "text",
        image = "image",
        video = "video",
        document = "document",
        location = "location"
    }
    export function MessageContentHSMHeaderFromJSON(json: any): MessageContentHSMHeader;
    export function MessageContentHSMHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentHSMHeader;
    export function MessageContentHSMHeaderToJSON(value?: MessageContentHSMHeader | null): any;
}
declare module "models/MessageContentHSM" {
    import { HSMButton } from "models/HSMButton";
    import { MessageContentHSMHeader } from "models/MessageContentHSMHeader";
    /**
     *
     * @export
     * @interface MessageContentHSM
     */
    export interface MessageContentHSM {
        /**
         *
         * @type {MessageContentHSMHeader}
         * @memberof MessageContentHSM
         */
        header?: MessageContentHSMHeader;
        /**
         * Message text
         * @type {string}
         * @memberof MessageContentHSM
         */
        body?: string;
        /**
         * Message footer
         * @type {string}
         * @memberof MessageContentHSM
         */
        footer?: string;
        /**
         * Buttons
         * @type {Array<HSMButton>}
         * @memberof MessageContentHSM
         */
        buttons?: Array<HSMButton>;
    }
    export function MessageContentHSMFromJSON(json: any): MessageContentHSM;
    export function MessageContentHSMFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentHSM;
    export function MessageContentHSMToJSON(value?: MessageContentHSM | null): any;
}
declare module "models/Currency" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    /**
     * Currency
     * @export
     * @enum {string}
     */
    export enum Currency {
        USD = "USD",
        EUR = "EUR",
        GBP = "GBP",
        RUB = "RUB",
        UAH = "UAH",
        BYN = "BYN",
        KZT = "KZT",
        KGS = "KGS",
        AMD = "AMD",
        AZN = "AZN",
        GEL = "GEL",
        MDL = "MDL",
        TJS = "TJS",
        TMT = "TMT",
        UZS = "UZS",
        CNY = "CNY",
        JPY = "JPY",
        CHF = "CHF",
        CZK = "CZK",
        DKK = "DKK",
        ISK = "ISK",
        NOK = "NOK",
        SEK = "SEK",
        HRK = "HRK",
        HUF = "HUF",
        PLN = "PLN",
        RON = "RON",
        TRY = "TRY",
        BGN = "BGN",
        INR = "INR",
        IDR = "IDR",
        MYR = "MYR",
        PHP = "PHP",
        SGD = "SGD",
        THB = "THB",
        VND = "VND",
        MXN = "MXN",
        ARS = "ARS",
        CLP = "CLP",
        COP = "COP",
        PEN = "PEN",
        PYG = "PYG",
        UYU = "UYU",
        BOB = "BOB",
        BRL = "BRL",
        CRC = "CRC",
        DOP = "DOP",
        GTQ = "GTQ",
        HNL = "HNL",
        NIO = "NIO",
        PAB = "PAB",
        SVC = "SVC",
        AUD = "AUD",
        NZD = "NZD",
        ILS = "ILS",
        ZAR = "ZAR",
        BHD = "BHD",
        EGP = "EGP",
        JOD = "JOD",
        KWD = "KWD",
        LBP = "LBP",
        OMR = "OMR",
        QAR = "QAR",
        SAR = "SAR",
        AED = "AED",
        AFN = "AFN",
        ALL = "ALL",
        DZD = "DZD",
        AOA = "AOA",
        AWG = "AWG",
        BSD = "BSD",
        BDT = "BDT",
        BBD = "BBD",
        BZD = "BZD",
        BMD = "BMD",
        BTN = "BTN",
        BAM = "BAM",
        BWP = "BWP",
        BND = "BND",
        BIF = "BIF",
        KHR = "KHR",
        CAD = "CAD",
        CVE = "CVE",
        KYD = "KYD",
        KMF = "KMF",
        CDF = "CDF",
        CUP = "CUP",
        CZ = "CZ"
    }
    export function CurrencyFromJSON(json: any): Currency;
    export function CurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currency;
    export function CurrencyToJSON(value?: Currency | null): any;
}
declare module "models/ProductItem" {
    import { Currency } from "models/Currency";
    /**
     *
     * @export
     * @interface ProductItem
     */
    export interface ProductItem {
        /**
         * Product ID
         * @type {string}
         * @memberof ProductItem
         */
        product_retailer_id?: string;
        /**
         * Quantity
         * @type {number}
         * @memberof ProductItem
         */
        quantity?: number;
        /**
         * Item price
         * @type {number}
         * @memberof ProductItem
         */
        item_price?: number;
        /**
         *
         * @type {Currency}
         * @memberof ProductItem
         */
        currency?: Currency;
    }
    export function ProductItemFromJSON(json: any): ProductItem;
    export function ProductItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductItem;
    export function ProductItemToJSON(value?: ProductItem | null): any;
}
declare module "models/MessageContentOrder" {
    import { ProductItem } from "models/ProductItem";
    /**
     *
     * @export
     * @interface MessageContentOrder
     */
    export interface MessageContentOrder {
        /**
         * Catalog ID
         * @type {string}
         * @memberof MessageContentOrder
         */
        catalog_id?: string;
        /**
         *
         * @type {Array<ProductItem>}
         * @memberof MessageContentOrder
         */
        product_items?: Array<ProductItem>;
        /**
         * Message body
         * @type {string}
         * @memberof MessageContentOrder
         */
        text?: string;
    }
    export function MessageContentOrderFromJSON(json: any): MessageContentOrder;
    export function MessageContentOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentOrder;
    export function MessageContentOrderToJSON(value?: MessageContentOrder | null): any;
}
declare module "models/MessageContentProductItems" {
    /**
     *
     * @export
     * @interface MessageContentProductItems
     */
    export interface MessageContentProductItems {
        /**
         * Type of interactive
         * @type {string}
         * @memberof MessageContentProductItems
         */
        type?: MessageContentProductItemsTypeEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum MessageContentProductItemsTypeEnum {
        list = "list",
        buttons = "buttons"
    }
    export function MessageContentProductItemsFromJSON(json: any): MessageContentProductItems;
    export function MessageContentProductItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentProductItems;
    export function MessageContentProductItemsToJSON(value?: MessageContentProductItems | null): any;
}
declare module "models/MessageContentSystem" {
    /**
     *
     * @export
     * @interface MessageContentSystem
     */
    export interface MessageContentSystem {
        /**
         * Message body
         * @type {string}
         * @memberof MessageContentSystem
         */
        body?: string;
    }
    export function MessageContentSystemFromJSON(json: any): MessageContentSystem;
    export function MessageContentSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContentSystem;
    export function MessageContentSystemToJSON(value?: MessageContentSystem | null): any;
}
declare module "models/MessageContext" {
    import { MessageContent } from "models/MessageContent";
    import { MessageType } from "models/MessageType";
    /**
     *
     * @export
     * @interface MessageContext
     */
    export interface MessageContext {
        /**
         * Is forwarding message
         * @type {boolean}
         * @memberof MessageContext
         */
        forwarded?: boolean;
        /**
         * Count fo forwarding message
         * @type {number}
         * @memberof MessageContext
         */
        forwarding_score?: number;
        /**
         * Whatsapp IDs of mentioned users
         * @type {Array<string>}
         * @memberof MessageContext
         */
        mentions?: Array<string>;
        /**
         * ID of quoted message
         * @type {string}
         * @memberof MessageContext
         */
        quoted_id?: string;
        /**
         *
         * @type {MessageType}
         * @memberof MessageContext
         */
        quoted_type?: MessageType;
        /**
         *
         * @type {MessageContent}
         * @memberof MessageContext
         */
        quoted_content?: MessageContent;
        /**
         * Whatsapp ID of quoted message author
         * @type {string}
         * @memberof MessageContext
         */
        quoted_author?: string;
        /**
         * Ephemeral message duration
         * @type {number}
         * @memberof MessageContext
         */
        ephemeral?: number;
    }
    export function MessageContextFromJSON(json: any): MessageContext;
    export function MessageContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageContext;
    export function MessageContextToJSON(value?: MessageContext | null): any;
}
declare module "models/MessageReaction" {
    /**
     *
     * @export
     * @interface MessageReaction
     */
    export interface MessageReaction {
        /**
         * Reaction ID
         * @type {string}
         * @memberof MessageReaction
         */
        id: string;
        /**
         * Reaction text
         * @type {string}
         * @memberof MessageReaction
         */
        emoji?: string;
        /**
         * Reaction group key
         * @type {string}
         * @memberof MessageReaction
         */
        group_key?: string;
        /**
         * Reaction timestamp
         * @type {number}
         * @memberof MessageReaction
         */
        t?: number;
        /**
         * Is reaction unread
         * @type {boolean}
         * @memberof MessageReaction
         */
        unread?: boolean;
    }
    export function MessageReactionFromJSON(json: any): MessageReaction;
    export function MessageReactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageReaction;
    export function MessageReactionToJSON(value?: MessageReaction | null): any;
}
declare module "models/MessageSource" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    /**
     * Message source
     * @export
     * @enum {string}
     */
    export enum MessageSource {
        web = "web",
        mobile = "mobile",
        api = "api",
        system = "system",
        business_api = "business_api"
    }
    export function MessageSourceFromJSON(json: any): MessageSource;
    export function MessageSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageSource;
    export function MessageSourceToJSON(value?: MessageSource | null): any;
}
declare module "models/MessageStatus" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    /**
     * Message ack status
     * @export
     * @enum {string}
     */
    export enum MessageStatus {
        failed = "failed",
        pending = "pending",
        sent = "sent",
        delivered = "delivered",
        read = "read",
        played = "played",
        deleted = "deleted"
    }
    export function MessageStatusFromJSON(json: any): MessageStatus;
    export function MessageStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageStatus;
    export function MessageStatusToJSON(value?: MessageStatus | null): any;
}
declare module "models/Message" {
    import { Label } from "models/Label";
    import { MessageAction } from "models/MessageAction";
    import { MessageContentAudio } from "models/MessageContentAudio";
    import { MessageContentContact } from "models/MessageContentContact";
    import { MessageContentContacts } from "models/MessageContentContacts";
    import { MessageContentDocument } from "models/MessageContentDocument";
    import { MessageContentHSM } from "models/MessageContentHSM";
    import { MessageContentImage } from "models/MessageContentImage";
    import { MessageContentInteractive } from "models/MessageContentInteractive";
    import { MessageContentLinkPreview } from "models/MessageContentLinkPreview";
    import { MessageContentLiveLocation } from "models/MessageContentLiveLocation";
    import { MessageContentLocation } from "models/MessageContentLocation";
    import { MessageContentOrder } from "models/MessageContentOrder";
    import { MessageContentPoll } from "models/MessageContentPoll";
    import { MessageContentProductItems } from "models/MessageContentProductItems";
    import { MessageContentSticker } from "models/MessageContentSticker";
    import { MessageContentSystem } from "models/MessageContentSystem";
    import { MessageContentText } from "models/MessageContentText";
    import { MessageContentVideo } from "models/MessageContentVideo";
    import { MessageContext } from "models/MessageContext";
    import { MessageReaction } from "models/MessageReaction";
    import { MessageSource } from "models/MessageSource";
    import { MessageStatus } from "models/MessageStatus";
    import { MessageType } from "models/MessageType";
    /**
     *
     * @export
     * @interface Message
     */
    export interface Message {
        /**
         * Message ID
         * @type {string}
         * @memberof Message
         */
        id: string;
        /**
         *
         * @type {MessageType}
         * @memberof Message
         */
        type: MessageType;
        /**
         * Message subtype
         * @type {string}
         * @memberof Message
         */
        subtype?: string;
        /**
         * Chat ID
         * @type {string}
         * @memberof Message
         */
        chat_id: string;
        /**
         * WhatsApp ID of the sender
         * @type {string}
         * @memberof Message
         */
        from?: string;
        /**
         * Is message from me
         * @type {boolean}
         * @memberof Message
         */
        from_me: boolean;
        /**
         * Pushname of the sender
         * @type {string}
         * @memberof Message
         */
        from_name?: string;
        /**
         *
         * @type {MessageSource}
         * @memberof Message
         */
        source?: MessageSource;
        /**
         * Message timestamp
         * @type {number}
         * @memberof Message
         */
        timestamp: number;
        /**
         *
         * @type {MessageStatus}
         * @memberof Message
         */
        status?: MessageStatus;
        /**
         *
         * @type {MessageContentText}
         * @memberof Message
         */
        text?: MessageContentText;
        /**
         *
         * @type {MessageContentImage}
         * @memberof Message
         */
        image?: MessageContentImage;
        /**
         *
         * @type {MessageContentVideo}
         * @memberof Message
         */
        video?: MessageContentVideo;
        /**
         *
         * @type {MessageContentVideo}
         * @memberof Message
         */
        gif?: MessageContentVideo;
        /**
         *
         * @type {MessageContentAudio}
         * @memberof Message
         */
        audio?: MessageContentAudio;
        /**
         *
         * @type {MessageContentAudio}
         * @memberof Message
         */
        voice?: MessageContentAudio;
        /**
         *
         * @type {MessageContentDocument}
         * @memberof Message
         */
        document?: MessageContentDocument;
        /**
         *
         * @type {MessageContentLinkPreview}
         * @memberof Message
         */
        link_preview?: MessageContentLinkPreview;
        /**
         *
         * @type {MessageContentSticker}
         * @memberof Message
         */
        sticker?: MessageContentSticker;
        /**
         *
         * @type {MessageContentLocation}
         * @memberof Message
         */
        location?: MessageContentLocation;
        /**
         *
         * @type {MessageContentLiveLocation}
         * @memberof Message
         */
        live_location?: MessageContentLiveLocation;
        /**
         *
         * @type {MessageContentContact}
         * @memberof Message
         */
        contact?: MessageContentContact;
        /**
         *
         * @type {MessageContentContacts}
         * @memberof Message
         */
        contact_list?: MessageContentContacts;
        /**
         *
         * @type {MessageContentInteractive}
         * @memberof Message
         */
        interactive?: MessageContentInteractive;
        /**
         *
         * @type {MessageContentPoll}
         * @memberof Message
         */
        poll?: MessageContentPoll;
        /**
         *
         * @type {MessageContentHSM}
         * @memberof Message
         */
        hsm?: MessageContentHSM;
        /**
         *
         * @type {MessageContentSystem}
         * @memberof Message
         */
        system?: MessageContentSystem;
        /**
         *
         * @type {MessageContentOrder}
         * @memberof Message
         */
        order?: MessageContentOrder;
        /**
         *
         * @type {MessageContentProductItems}
         * @memberof Message
         */
        product_items?: MessageContentProductItems;
        /**
         *
         * @type {MessageAction}
         * @memberof Message
         */
        action?: MessageAction;
        /**
         *
         * @type {MessageContext}
         * @memberof Message
         */
        context?: MessageContext;
        /**
         * Reactions for message
         * @type {Array<MessageReaction>}
         * @memberof Message
         */
        reactions?: Array<MessageReaction>;
        /**
         * Labels associated with message
         * @type {Array<Label>}
         * @memberof Message
         */
        labels?: Array<Label>;
    }
    export function MessageFromJSON(json: any): Message;
    export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message;
    export function MessageToJSON(value?: Message | null): any;
}
declare module "models/Chat" {
    import { Label } from "models/Label";
    import { Message } from "models/Message";
    /**
     *
     * @export
     * @interface Chat
     */
    export interface Chat {
        /**
         * Chat ID
         * @type {string}
         * @memberof Chat
         */
        id: string;
        /**
         * Chat name
         * @type {string}
         * @memberof Chat
         */
        name?: string;
        /**
         * Chat type
         * @type {string}
         * @memberof Chat
         */
        type: ChatTypeEnum;
        /**
         * Chat timestamp
         * @type {number}
         * @memberof Chat
         */
        timestamp?: number;
        /**
         * Chat picture URL
         * @type {string}
         * @memberof Chat
         */
        chat_pic?: string;
        /**
         * Is chat pinned
         * @type {boolean}
         * @memberof Chat
         */
        pin?: boolean;
        /**
         * Is chat muted
         * @type {boolean}
         * @memberof Chat
         */
        mute?: boolean;
        /**
         * Chat mute until
         * @type {number}
         * @memberof Chat
         */
        mute_until?: number;
        /**
         * Is chat archived
         * @type {boolean}
         * @memberof Chat
         */
        archive?: boolean;
        /**
         * Unread messages count
         * @type {number}
         * @memberof Chat
         */
        unread?: number;
        /**
         * Is chat unread mention
         * @type {boolean}
         * @memberof Chat
         */
        unread_mention?: boolean;
        /**
         * Is chat read only
         * @type {boolean}
         * @memberof Chat
         */
        read_only?: boolean;
        /**
         * Is chat not spam
         * @type {boolean}
         * @memberof Chat
         */
        not_spam?: boolean;
        /**
         *
         * @type {Message}
         * @memberof Chat
         */
        last_message?: Message;
        /**
         * Labels associated with chat
         * @type {Array<Label>}
         * @memberof Chat
         */
        labels?: Array<Label>;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum ChatTypeEnum {
        group = "group",
        contact = "contact",
        broadcast = "broadcast"
    }
    export function ChatFromJSON(json: any): Chat;
    export function ChatFromJSONTyped(json: any, ignoreDiscriminator: boolean): Chat;
    export function ChatToJSON(value?: Chat | null): any;
}
declare module "models/ChatUpdate" {
    import { Chat } from "models/Chat";
    /**
     *
     * @export
     * @interface ChatUpdate
     */
    export interface ChatUpdate {
        /**
         *
         * @type {Chat}
         * @memberof ChatUpdate
         */
        before_update: Chat;
        /**
         *
         * @type {Chat}
         * @memberof ChatUpdate
         */
        after_update: Chat;
        /**
         *
         * @type {Array<string>}
         * @memberof ChatUpdate
         */
        changes: Array<string>;
    }
    export function ChatUpdateFromJSON(json: any): ChatUpdate;
    export function ChatUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatUpdate;
    export function ChatUpdateToJSON(value?: ChatUpdate | null): any;
}
declare module "models/Iterator" {
    /**
     *
     * @export
     * @interface Iterator
     */
    export interface Iterator {
        /**
         * Count of requested chats
         * @type {number}
         * @memberof Iterator
         */
        count?: number;
        /**
         * Total number of returned chats
         * @type {number}
         * @memberof Iterator
         */
        total?: number;
        /**
         * Offset of requested chats
         * @type {number}
         * @memberof Iterator
         */
        offset?: number;
    }
    export function IteratorFromJSON(json: any): Iterator;
    export function IteratorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Iterator;
    export function IteratorToJSON(value?: Iterator | null): any;
}
declare module "models/ChatsList" {
    import { Chat } from "models/Chat";
    /**
     *
     * @export
     * @interface ChatsList
     */
    export interface ChatsList {
        /**
         *
         * @type {Array<Chat>}
         * @memberof ChatsList
         */
        chats?: Array<Chat>;
        /**
         * Count of requested chats
         * @type {number}
         * @memberof ChatsList
         */
        count?: number;
        /**
         * Total number of returned chats
         * @type {number}
         * @memberof ChatsList
         */
        total?: number;
        /**
         * Offset of requested chats
         * @type {number}
         * @memberof ChatsList
         */
        offset?: number;
    }
    export function ChatsListFromJSON(json: any): ChatsList;
    export function ChatsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatsList;
    export function ChatsListToJSON(value?: ChatsList | null): any;
}
declare module "models/CheckContact" {
    /**
     *
     * @export
     * @interface CheckContact
     */
    export interface CheckContact {
        /**
         * The value you sent in the contacts field of the JSON request.
         * @type {string}
         * @memberof CheckContact
         */
        input?: string;
        /**
         * Status of the user.
         * @type {string}
         * @memberof CheckContact
         */
        status?: CheckContactStatusEnum;
        /**
         * WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid.
         * @type {string}
         * @memberof CheckContact
         */
        wa_id?: string;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum CheckContactStatusEnum {
        valid = "valid",
        invalid = "invalid"
    }
    export function CheckContactFromJSON(json: any): CheckContact;
    export function CheckContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckContact;
    export function CheckContactToJSON(value?: CheckContact | null): any;
}
declare module "models/CheckContactRequest" {
    /**
     *
     * @export
     * @interface CheckContactRequest
     */
    export interface CheckContactRequest {
        /**
         * Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).
         * @type {string}
         * @memberof CheckContactRequest
         */
        blocking?: CheckContactRequestBlockingEnum;
        /**
         * Array of contact phone numbers. The numbers can be in any standard telephone number format.
         * @type {Array<string>}
         * @memberof CheckContactRequest
         */
        contacts: Array<string>;
        /**
         * Force check determines whether the request should check the contact even if it is already in the cache.
         * @type {boolean}
         * @memberof CheckContactRequest
         */
        force_check?: boolean;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum CheckContactRequestBlockingEnum {
        no_wait = "no_wait",
        wait = "wait"
    }
    export function CheckContactRequestFromJSON(json: any): CheckContactRequest;
    export function CheckContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckContactRequest;
    export function CheckContactRequestToJSON(value?: CheckContactRequest | null): any;
}
declare module "models/CheckContactResponse" {
    import { CheckContact } from "models/CheckContact";
    /**
     *
     * @export
     * @interface CheckContactResponse
     */
    export interface CheckContactResponse {
        /**
         *
         * @type {Array<CheckContact>}
         * @memberof CheckContactResponse
         */
        contacts?: Array<CheckContact>;
    }
    export function CheckContactResponseFromJSON(json: any): CheckContactResponse;
    export function CheckContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckContactResponse;
    export function CheckContactResponseToJSON(value?: CheckContactResponse | null): any;
}
declare module "models/Contact" {
    /**
     *
     * @export
     * @interface Contact
     */
    export interface Contact {
        /**
         * WA ID
         * @type {string}
         * @memberof Contact
         */
        id: string;
        /**
         * Contact title from contact book
         * @type {string}
         * @memberof Contact
         */
        name: string;
        /**
         * Account name from WA or WA Business name
         * @type {string}
         * @memberof Contact
         */
        pushname?: string;
        /**
         * Is a business account
         * @type {boolean}
         * @memberof Contact
         */
        is_business?: boolean;
        /**
         * Profile picture URL
         * @type {string}
         * @memberof Contact
         */
        profile_pic?: string;
        /**
         * Contact status
         * @type {string}
         * @memberof Contact
         */
        status?: string;
    }
    export function ContactFromJSON(json: any): Contact;
    export function ContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contact;
    export function ContactToJSON(value?: Contact | null): any;
}
declare module "models/ContactUpdate" {
    import { Contact } from "models/Contact";
    /**
     *
     * @export
     * @interface ContactUpdate
     */
    export interface ContactUpdate {
        /**
         *
         * @type {Contact}
         * @memberof ContactUpdate
         */
        before_update: Contact;
        /**
         *
         * @type {Contact}
         * @memberof ContactUpdate
         */
        after_update: Contact;
        /**
         *
         * @type {Array<string>}
         * @memberof ContactUpdate
         */
        changes: Array<string>;
    }
    export function ContactUpdateFromJSON(json: any): ContactUpdate;
    export function ContactUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactUpdate;
    export function ContactUpdateToJSON(value?: ContactUpdate | null): any;
}
declare module "models/ContactsList" {
    import { Contact } from "models/Contact";
    /**
     *
     * @export
     * @interface ContactsList
     */
    export interface ContactsList {
        /**
         *
         * @type {Array<Contact>}
         * @memberof ContactsList
         */
        contacts?: Array<Contact>;
        /**
         * Count of requested chats
         * @type {number}
         * @memberof ContactsList
         */
        count?: number;
        /**
         * Total number of returned chats
         * @type {number}
         * @memberof ContactsList
         */
        total?: number;
        /**
         * Offset of requested chats
         * @type {number}
         * @memberof ContactsList
         */
        offset?: number;
    }
    export function ContactsListFromJSON(json: any): ContactsList;
    export function ContactsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactsList;
    export function ContactsListToJSON(value?: ContactsList | null): any;
}
declare module "models/Participants" {
    /**
     *
     * @export
     * @interface Participants
     */
    export interface Participants {
        /**
         *
         * @type {Array<string>}
         * @memberof Participants
         */
        participants?: Array<string>;
    }
    export function ParticipantsFromJSON(json: any): Participants;
    export function ParticipantsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Participants;
    export function ParticipantsToJSON(value?: Participants | null): any;
}
declare module "models/CreateGroupRequest" {
    /**
     *
     * @export
     * @interface CreateGroupRequest
     */
    export interface CreateGroupRequest {
        /**
         *
         * @type {string}
         * @memberof CreateGroupRequest
         */
        subject: string;
        /**
         *
         * @type {Array<string>}
         * @memberof CreateGroupRequest
         */
        participants: Array<string>;
    }
    export function CreateGroupRequestFromJSON(json: any): CreateGroupRequest;
    export function CreateGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGroupRequest;
    export function CreateGroupRequestToJSON(value?: CreateGroupRequest | null): any;
}
declare module "models/Event" {
    /**
     * message, ack, chat, status - is deprecated and will be removed in the next
     * @export
     * @interface Event
     */
    export interface Event {
        /**
         *
         * @type {string}
         * @memberof Event
         */
        type?: EventTypeEnum;
        /**
         *
         * @type {string}
         * @memberof Event
         */
        method?: EventMethodEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum EventTypeEnum {
        messages = "messages",
        statuses = "statuses",
        chats = "chats",
        contacts = "contacts",
        groups = "groups",
        presences = "presences",
        calls = "calls",
        channel = "channel",
        users = "users",
        labels = "labels",
        service = "service",
        message = "message",
        ack = "ack",
        chat = "chat",
        status = "status"
    } /**
    * @export
    * @enum {string}
    */
    export enum EventMethodEnum {
        post = "post",
        put = "put",
        delete = "delete",
        patch = "patch"
    }
    export function EventFromJSON(json: any): Event;
    export function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event;
    export function EventToJSON(value?: Event | null): any;
}
declare module "models/ForwardMessage" {
    /**
     *
     * @export
     * @interface ForwardMessage
     */
    export interface ForwardMessage {
        /**
         * Chat ID or phone number where the message will be forwarded
         * @type {string}
         * @memberof ForwardMessage
         */
        to: string;
        /**
         * Force forward message
         * @type {boolean}
         * @memberof ForwardMessage
         */
        force?: boolean;
    }
    export function ForwardMessageFromJSON(json: any): ForwardMessage;
    export function ForwardMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForwardMessage;
    export function ForwardMessageToJSON(value?: ForwardMessage | null): any;
}
declare module "models/Participant" {
    /**
     *
     * @export
     * @interface Participant
     */
    export interface Participant {
        /**
         * Contact ID
         * @type {string}
         * @memberof Participant
         */
        id: string;
        /**
         * Participant rank
         * @type {string}
         * @memberof Participant
         */
        rank: ParticipantRankEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum ParticipantRankEnum {
        admin = "admin",
        member = "member",
        creator = "creator"
    }
    export function ParticipantFromJSON(json: any): Participant;
    export function ParticipantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Participant;
    export function ParticipantToJSON(value?: Participant | null): any;
}
declare module "models/Group" {
    import { Label } from "models/Label";
    import { Message } from "models/Message";
    import { Participant } from "models/Participant";
    /**
     *
     * @export
     * @interface Group
     */
    export interface Group {
        /**
         * Chat ID
         * @type {string}
         * @memberof Group
         */
        id: string;
        /**
         * Group name
         * @type {string}
         * @memberof Group
         */
        name: string;
        /**
         * Chat type
         * @type {string}
         * @memberof Group
         */
        type: GroupTypeEnum;
        /**
         * Chat timestamp
         * @type {number}
         * @memberof Group
         */
        timestamp?: number;
        /**
         * Chat picture URL
         * @type {string}
         * @memberof Group
         */
        chat_pic?: string;
        /**
         * Is chat pinned
         * @type {boolean}
         * @memberof Group
         */
        pin?: boolean;
        /**
         * Is chat muted
         * @type {boolean}
         * @memberof Group
         */
        mute?: boolean;
        /**
         * Chat mute until
         * @type {number}
         * @memberof Group
         */
        mute_until?: number;
        /**
         * Is chat archived
         * @type {boolean}
         * @memberof Group
         */
        archive?: boolean;
        /**
         * Unread messages count
         * @type {number}
         * @memberof Group
         */
        unread?: number;
        /**
         * Is chat unread mention
         * @type {boolean}
         * @memberof Group
         */
        unread_mention?: boolean;
        /**
         * Is chat read only
         * @type {boolean}
         * @memberof Group
         */
        read_only?: boolean;
        /**
         * Is chat not spam
         * @type {boolean}
         * @memberof Group
         */
        not_spam?: boolean;
        /**
         *
         * @type {Message}
         * @memberof Group
         */
        last_message?: Message;
        /**
         * Labels associated with chat
         * @type {Array<Label>}
         * @memberof Group
         */
        labels?: Array<Label>;
        /**
         * Group name owner
         * @type {string}
         * @memberof Group
         */
        name_owner?: string;
        /**
         * Group name change timestamp
         * @type {number}
         * @memberof Group
         */
        name_at?: number;
        /**
         * Group description
         * @type {string}
         * @memberof Group
         */
        description?: string;
        /**
         * Group description owner
         * @type {string}
         * @memberof Group
         */
        description_owner?: string;
        /**
         * Group description ID
         * @type {string}
         * @memberof Group
         */
        description_id?: string;
        /**
         * Group size
         * @type {number}
         * @memberof Group
         */
        size: number;
        /**
         * Group participants
         * @type {Array<Participant>}
         * @memberof Group
         */
        participants: Array<Participant>;
        /**
         * Group creation timestamp
         * @type {number}
         * @memberof Group
         */
        created_at?: number;
        /**
         * Contact ID
         * @type {string}
         * @memberof Group
         */
        created_by?: string;
        /**
         * Is group suspended
         * @type {boolean}
         * @memberof Group
         */
        suspended?: boolean;
        /**
         * Is group terminated
         * @type {boolean}
         * @memberof Group
         */
        terminated?: boolean;
        /**
         * Is group parent
         * @type {boolean}
         * @memberof Group
         */
        is_parent?: boolean;
        /**
         * Is group default subgroup
         * @type {boolean}
         * @memberof Group
         */
        is_default_subgroup?: boolean;
        /**
         * If only admins can change group settings
         * @type {boolean}
         * @memberof Group
         */
        restricted?: boolean;
        /**
         * If only admins can send messages
         * @type {boolean}
         * @memberof Group
         */
        announcements?: boolean;
        /**
         * Group ephemeral timer
         * @type {number}
         * @memberof Group
         */
        ephemeral?: number;
        /**
         * Group invite code
         * @type {string}
         * @memberof Group
         */
        invite_code?: string;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum GroupTypeEnum {
        group = "group",
        contact = "contact",
        broadcast = "broadcast"
    }
    export function GroupFromJSON(json: any): Group;
    export function GroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): Group;
    export function GroupToJSON(value?: Group | null): any;
}
declare module "models/GroupInvite" {
    /**
     *
     * @export
     * @interface GroupInvite
     */
    export interface GroupInvite {
        /**
         *
         * @type {string}
         * @memberof GroupInvite
         */
        invite_code: string;
    }
    export function GroupInviteFromJSON(json: any): GroupInvite;
    export function GroupInviteFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupInvite;
    export function GroupInviteToJSON(value?: GroupInvite | null): any;
}
declare module "models/GroupUpdate" {
    import { Group } from "models/Group";
    /**
     *
     * @export
     * @interface GroupUpdate
     */
    export interface GroupUpdate {
        /**
         *
         * @type {Group}
         * @memberof GroupUpdate
         */
        before_update: Group;
        /**
         *
         * @type {Group}
         * @memberof GroupUpdate
         */
        after_update: Group;
        /**
         *
         * @type {Array<string>}
         * @memberof GroupUpdate
         */
        changes: Array<string>;
    }
    export function GroupUpdateFromJSON(json: any): GroupUpdate;
    export function GroupUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupUpdate;
    export function GroupUpdateToJSON(value?: GroupUpdate | null): any;
}
declare module "models/GroupsList" {
    import { Group } from "models/Group";
    /**
     *
     * @export
     * @interface GroupsList
     */
    export interface GroupsList {
        /**
         *
         * @type {Array<Group>}
         * @memberof GroupsList
         */
        groups?: Array<Group>;
        /**
         * Count of requested chats
         * @type {number}
         * @memberof GroupsList
         */
        count?: number;
        /**
         * Total number of returned chats
         * @type {number}
         * @memberof GroupsList
         */
        total?: number;
        /**
         * Offset of requested chats
         * @type {number}
         * @memberof GroupsList
         */
        offset?: number;
    }
    export function GroupsListFromJSON(json: any): GroupsList;
    export function GroupsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupsList;
    export function GroupsListToJSON(value?: GroupsList | null): any;
}
declare module "models/Health" {
    import { ChannelStatus } from "models/ChannelStatus";
    import { Contact } from "models/Contact";
    /**
     * The health object contains information about the uptime of the channel and the status of the channel. Sent on event "channels.post"
     * @export
     * @interface Health
     */
    export interface Health {
        /**
         * Date timestamp when channel started on the server.
         * @type {number}
         * @memberof Health
         */
        start_at: number;
        /**
         * Seconds have passed since the start of the instance.
         * @type {number}
         * @memberof Health
         */
        uptime: number;
        /**
         *
         * @type {ChannelStatus}
         * @memberof Health
         */
        status: ChannelStatus;
        /**
         *
         * @type {Contact}
         * @memberof Health
         */
        user?: Contact;
    }
    export function HealthFromJSON(json: any): Health;
    export function HealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): Health;
    export function HealthToJSON(value?: Health | null): any;
}
declare module "models/LabelAssociations" {
    import { Chat } from "models/Chat";
    import { Message } from "models/Message";
    /**
     *
     * @export
     * @interface LabelAssociations
     */
    export interface LabelAssociations {
        /**
         *
         * @type {Array<Chat>}
         * @memberof LabelAssociations
         */
        chats?: Array<Chat>;
        /**
         *
         * @type {Array<Message>}
         * @memberof LabelAssociations
         */
        messages?: Array<Message>;
    }
    export function LabelAssociationsFromJSON(json: any): LabelAssociations;
    export function LabelAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LabelAssociations;
    export function LabelAssociationsToJSON(value?: LabelAssociations | null): any;
}
declare module "models/Limits" {
    /**
     *
     * @export
     * @interface Limits
     */
    export interface Limits {
        /**
         * Maximum number of messages that can be sent
         * @type {number}
         * @memberof Limits
         */
        messages: number;
        /**
         * List of chat IDs that can be used
         * @type {Array<string>}
         * @memberof Limits
         */
        chats: Array<string>;
        /**
         * Maximum number of check phone numbers
         * @type {number}
         * @memberof Limits
         */
        checks: number;
    }
    export function LimitsFromJSON(json: any): Limits;
    export function LimitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Limits;
    export function LimitsToJSON(value?: Limits | null): any;
}
declare module "models/ListParticipantsRequest" {
    /**
     *
     * @export
     * @interface ListParticipantsRequest
     */
    export interface ListParticipantsRequest {
        /**
         *
         * @type {Array<string>}
         * @memberof ListParticipantsRequest
         */
        participants: Array<string>;
    }
    export function ListParticipantsRequestFromJSON(json: any): ListParticipantsRequest;
    export function ListParticipantsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListParticipantsRequest;
    export function ListParticipantsRequestToJSON(value?: ListParticipantsRequest | null): any;
}
declare module "models/MediaMessageType" {
    /**
     * WhatsApp API
     * Sending and receiving messages using HTTP requests. Fixed price with no hidden fees, without limits and restrictions. You will be able to send and receive text/media/files/locations/goods/orders/polls messages via WhatsApp in private or group chats. Guides and SDK can be found on our website.
     *
     * The version of the OpenAPI document: 1.5.1
     * Contact: care@whapi.cloud
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
     * https://openapi-generator.tech
     * Do not edit the class manually.
     */
    /**
     * Media message type
     * @export
     * @enum {string}
     */
    export enum MediaMessageType {
        image = "image",
        video = "video",
        gif = "gif",
        audio = "audio",
        voice = "voice",
        document = "document",
        sticker = "sticker"
    }
    export function MediaMessageTypeFromJSON(json: any): MediaMessageType;
    export function MediaMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaMessageType;
    export function MediaMessageTypeToJSON(value?: MediaMessageType | null): any;
}
declare module "models/MediaSettings" {
    /**
     *
     * @export
     * @interface MediaSettings
     */
    export interface MediaSettings {
        /**
         * An array specifying which types of media to automatically download.
         * @type {Array<string>}
         * @memberof MediaSettings
         */
        auto_download: Array<MediaSettingsAutoDownloadEnum>;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum MediaSettingsAutoDownloadEnum {
        image = "image",
        audio = "audio",
        voice = "voice",
        video = "video",
        document = "document",
        sticker = "sticker"
    }
    export function MediaSettingsFromJSON(json: any): MediaSettings;
    export function MediaSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaSettings;
    export function MediaSettingsToJSON(value?: MediaSettings | null): any;
}
declare module "models/Mentions" {
    /**
     *
     * @export
     * @interface Mentions
     */
    export interface Mentions {
        /**
         * Whatsapp IDs of mentioned users
         * @type {Array<string>}
         * @memberof Mentions
         */
        mentions?: Array<string>;
    }
    export function MentionsFromJSON(json: any): Mentions;
    export function MentionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mentions;
    export function MentionsToJSON(value?: Mentions | null): any;
}
declare module "models/MessagePropsGif" {
    /**
     *
     * @export
     * @interface MessagePropsGif
     */
    export interface MessagePropsGif {
        /**
         * Optional. Text caption under the media.
         * @type {string}
         * @memberof MessagePropsGif
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof MessagePropsGif
         */
        preview?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof MessagePropsGif
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof MessagePropsGif
         */
        height?: number;
        /**
         * Optional. This field indicates whether the GIF should be played automatically when the message is received.
         * @type {boolean}
         * @memberof MessagePropsGif
         */
        autoplay?: boolean;
    }
    export function MessagePropsGifFromJSON(json: any): MessagePropsGif;
    export function MessagePropsGifFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagePropsGif;
    export function MessagePropsGifToJSON(value?: MessagePropsGif | null): any;
}
declare module "models/MessageUpdate" {
    import { Message } from "models/Message";
    /**
     *
     * @export
     * @interface MessageUpdate
     */
    export interface MessageUpdate {
        /**
         * Message ID
         * @type {string}
         * @memberof MessageUpdate
         */
        id: string;
        /**
         *
         * @type {Message}
         * @memberof MessageUpdate
         */
        trigger: Message;
        /**
         *
         * @type {Message}
         * @memberof MessageUpdate
         */
        before_update: Message;
        /**
         *
         * @type {Message}
         * @memberof MessageUpdate
         */
        after_update: Message;
        /**
         *
         * @type {Array<string>}
         * @memberof MessageUpdate
         */
        changes?: Array<string>;
    }
    export function MessageUpdateFromJSON(json: any): MessageUpdate;
    export function MessageUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageUpdate;
    export function MessageUpdateToJSON(value?: MessageUpdate | null): any;
}
declare module "models/MessagesList" {
    import { Message } from "models/Message";
    /**
     *
     * @export
     * @interface MessagesList
     */
    export interface MessagesList {
        /**
         *
         * @type {Array<Message>}
         * @memberof MessagesList
         */
        messages?: Array<Message>;
        /**
         * Count of requested messages
         * @type {number}
         * @memberof MessagesList
         */
        count?: number;
        /**
         * Total number of returned messages
         * @type {number}
         * @memberof MessagesList
         */
        total?: number;
        /**
         * Offset of requested messages
         * @type {number}
         * @memberof MessagesList
         */
        offset?: number;
    }
    export function MessagesListFromJSON(json: any): MessagesList;
    export function MessagesListFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesList;
    export function MessagesListToJSON(value?: MessagesList | null): any;
}
declare module "models/ModelError" {
    /**
     *
     * @export
     * @interface ModelError
     */
    export interface ModelError {
        /**
         * See the https://whapi.cloud/docs/whatsapp/api/errors for more information.
         * @type {number}
         * @memberof ModelError
         */
        code: number;
        /**
         * error message
         * @type {string}
         * @memberof ModelError
         */
        message: string;
        /**
         * error detail
         * @type {string}
         * @memberof ModelError
         */
        details?: string;
        /**
         * location for error detail
         * @type {string}
         * @memberof ModelError
         */
        href?: string;
        /**
         * support contact
         * @type {string}
         * @memberof ModelError
         */
        support?: string;
    }
    export function ModelErrorFromJSON(json: any): ModelError;
    export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError;
    export function ModelErrorToJSON(value?: ModelError | null): any;
}
declare module "models/NewGroup" {
    /**
     *
     * @export
     * @interface NewGroup
     */
    export interface NewGroup {
        /**
         * Group ID
         * @type {string}
         * @memberof NewGroup
         */
        group_id: string;
    }
    export function NewGroupFromJSON(json: any): NewGroup;
    export function NewGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewGroup;
    export function NewGroupToJSON(value?: NewGroup | null): any;
}
declare module "models/ParticipantEvent" {
    /**
     *
     * @export
     * @interface ParticipantEvent
     */
    export interface ParticipantEvent {
        /**
         * Group ID
         * @type {string}
         * @memberof ParticipantEvent
         */
        group_id: string;
        /**
         *
         * @type {Array<string>}
         * @memberof ParticipantEvent
         */
        participants: Array<string>;
        /**
         * Participant action
         * @type {string}
         * @memberof ParticipantEvent
         */
        action: ParticipantEventActionEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum ParticipantEventActionEnum {
        add = "add",
        remove = "remove",
        promote = "promote",
        demote = "demote"
    }
    export function ParticipantEventFromJSON(json: any): ParticipantEvent;
    export function ParticipantEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParticipantEvent;
    export function ParticipantEventToJSON(value?: ParticipantEvent | null): any;
}
declare module "models/PatchChatRequest" {
    /**
     *
     * @export
     * @interface PatchChatRequest
     */
    export interface PatchChatRequest {
        /**
         * Pin or unpin chat
         * @type {boolean}
         * @memberof PatchChatRequest
         */
        pin?: boolean;
        /**
         * Mute chat until. 0 - unmute chat
         * @type {number}
         * @memberof PatchChatRequest
         */
        mute_until?: number;
        /**
         * Mark as unread/read chat
         * @type {boolean}
         * @memberof PatchChatRequest
         */
        mark_unread?: boolean;
    }
    export function PatchChatRequestFromJSON(json: any): PatchChatRequest;
    export function PatchChatRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchChatRequest;
    export function PatchChatRequestToJSON(value?: PatchChatRequest | null): any;
}
declare module "models/Presence" {
    /**
     *
     * @export
     * @interface Presence
     */
    export interface Presence {
        /**
         * Contact ID
         * @type {string}
         * @memberof Presence
         */
        contact_id: string;
        /**
         * Last seen timestamp
         * @type {number}
         * @memberof Presence
         */
        last_seen?: number;
        /**
         * Presence status
         * @type {string}
         * @memberof Presence
         */
        status?: PresenceStatusEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum PresenceStatusEnum {
        online = "online",
        offline = "offline",
        typing = "typing",
        recording = "recording",
        pending = "pending"
    }
    export function PresenceFromJSON(json: any): Presence;
    export function PresenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Presence;
    export function PresenceToJSON(value?: Presence | null): any;
}
declare module "models/Product" {
    import { Currency } from "models/Currency";
    /**
     *
     * @export
     * @interface Product
     */
    export interface Product {
        /**
         * Product ID
         * @type {string}
         * @memberof Product
         */
        product_retailer_id: string;
        /**
         *
         * @type {Currency}
         * @memberof Product
         */
        currency: Currency;
        /**
         * Product images urls
         * @type {Array<string>}
         * @memberof Product
         */
        images: Array<string>;
        /**
         * Product review status
         * @type {object}
         * @memberof Product
         */
        review?: object;
        /**
         * Product availability
         * @type {string}
         * @memberof Product
         */
        availability: ProductAvailabilityEnum;
        /**
         * Product name
         * @type {string}
         * @memberof Product
         */
        name: string;
        /**
         * Product url
         * @type {string}
         * @memberof Product
         */
        url?: string;
        /**
         * Product description
         * @type {string}
         * @memberof Product
         */
        description: string;
        /**
         * Product price
         * @type {number}
         * @memberof Product
         */
        price: number;
        /**
         * Product is hidden
         * @type {boolean}
         * @memberof Product
         */
        is_hidden?: boolean;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum ProductAvailabilityEnum {
        in_stock = "in stock",
        out_of_stock = "out of stock"
    }
    export function ProductFromJSON(json: any): Product;
    export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product;
    export function ProductToJSON(value?: Product | null): any;
}
declare module "models/ProductsList" {
    import { Product } from "models/Product";
    /**
     *
     * @export
     * @interface ProductsList
     */
    export interface ProductsList {
        /**
         *
         * @type {Array<Product>}
         * @memberof ProductsList
         */
        products?: Array<Product>;
        /**
         * Count of requested chats
         * @type {number}
         * @memberof ProductsList
         */
        count?: number;
        /**
         * Total number of returned chats
         * @type {number}
         * @memberof ProductsList
         */
        total?: number;
        /**
         * Offset of requested chats
         * @type {number}
         * @memberof ProductsList
         */
        offset?: number;
    }
    export function ProductsListFromJSON(json: any): ProductsList;
    export function ProductsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductsList;
    export function ProductsListToJSON(value?: ProductsList | null): any;
}
declare module "models/QR" {
    /**
     * The QR code object contains the QR code image and the status of the QR code. The QR code is only valid for a limited time. Sent on event "channels.patch"
     * @export
     * @interface QR
     */
    export interface QR {
        /**
         * Status of the QR code
         * @type {string}
         * @memberof QR
         */
        status: QRStatusEnum;
        /**
         * Base64 encoded QR code
         * @type {string}
         * @memberof QR
         */
        base64?: string;
        /**
         * Rowdata for generating the QR code
         * @type {string}
         * @memberof QR
         */
        rowdata?: string;
        /**
         * Seconds until the QR code expires
         * @type {number}
         * @memberof QR
         */
        expire?: number;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum QRStatusEnum {
        OK = "OK",
        TIMEOUT = "TIMEOUT",
        WAITING = "WAITING",
        ERROR = "ERROR"
    }
    export function QRFromJSON(json: any): QR;
    export function QRFromJSONTyped(json: any, ignoreDiscriminator: boolean): QR;
    export function QRToJSON(value?: QR | null): any;
}
declare module "models/QRParameters" {
    /**
     *
     * @export
     * @interface QRParameters
     */
    export interface QRParameters {
        /**
         * Size of QR code
         * @type {number}
         * @memberof QRParameters
         */
        size?: number;
        /**
         * Width of QR code canvas
         * @type {number}
         * @memberof QRParameters
         */
        width?: number;
        /**
         * Height of QR code canvas
         * @type {number}
         * @memberof QRParameters
         */
        height?: number;
        /**
         * Color of dark pixels
         * @type {string}
         * @memberof QRParameters
         */
        color_dark?: string;
        /**
         * Color of light pixels
         * @type {string}
         * @memberof QRParameters
         */
        color_light?: string;
    }
    export function QRParametersFromJSON(json: any): QRParameters;
    export function QRParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): QRParameters;
    export function QRParametersToJSON(value?: QRParameters | null): any;
}
declare module "models/ReactToMessage" {
    /**
     *
     * @export
     * @interface ReactToMessage
     */
    export interface ReactToMessage {
        /**
         * Reaction text
         * @type {string}
         * @memberof ReactToMessage
         */
        emoji: string;
    }
    export function ReactToMessageFromJSON(json: any): ReactToMessage;
    export function ReactToMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReactToMessage;
    export function ReactToMessageToJSON(value?: ReactToMessage | null): any;
}
declare module "models/ResponseError" {
    /**
     *
     * @export
     * @interface ResponseError
     */
    export interface ResponseError {
        /**
         *
         * @type {Error}
         * @memberof ResponseError
         */
        error: Error;
    }
    export function ResponseErrorFromJSON(json: any): ResponseError;
    export function ResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseError;
    export function ResponseErrorToJSON(value?: ResponseError | null): any;
}
declare module "models/ResponseSuccess" {
    /**
     *
     * @export
     * @interface ResponseSuccess
     */
    export interface ResponseSuccess {
        /**
         *
         * @type {boolean}
         * @memberof ResponseSuccess
         */
        success?: boolean;
    }
    export function ResponseSuccessFromJSON(json: any): ResponseSuccess;
    export function ResponseSuccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseSuccess;
    export function ResponseSuccessToJSON(value?: ResponseSuccess | null): any;
}
declare module "models/SendMePresenceRequest" {
    /**
     *
     * @export
     * @interface SendMePresenceRequest
     */
    export interface SendMePresenceRequest {
        /**
         *
         * @type {string}
         * @memberof SendMePresenceRequest
         */
        presence: SendMePresenceRequestPresenceEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum SendMePresenceRequestPresenceEnum {
        online = "online",
        offline = "offline"
    }
    export function SendMePresenceRequestFromJSON(json: any): SendMePresenceRequest;
    export function SendMePresenceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMePresenceRequest;
    export function SendMePresenceRequestToJSON(value?: SendMePresenceRequest | null): any;
}
declare module "models/_" {
    export type _ = any | string;
    export const _FromJSON: (j: any) => _;
    export const _FromJSONTyped: (j: any, i: boolean) => _;
    export const _ToJSON: (v?: _ | null) => any;
}
declare module "models/SendMedia" {
    import { _ } from "models/_";
    /**
     * Media file to send. You can use preuploaded file or upload file on the fly.
    Use preupload files if you want to send same file to multiple chats and
    so as not to disturb the order of messages.
    
     * @export
     * @interface SendMedia
     */
    export interface SendMedia {
        /**
         *
         * @type {_}
         * @memberof SendMedia
         */
        media?: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SendMedia
         */
        mime_type?: string;
    }
    export function SendMediaFromJSON(json: any): SendMedia;
    export function SendMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMedia;
    export function SendMediaToJSON(value?: SendMedia | null): any;
}
declare module "models/SendPresenceRequest" {
    /**
     *
     * @export
     * @interface SendPresenceRequest
     */
    export interface SendPresenceRequest {
        /**
         *
         * @type {string}
         * @memberof SendPresenceRequest
         */
        presence: SendPresenceRequestPresenceEnum;
        /**
         * Delay in seconds to simulate typing or recording
         * @type {number}
         * @memberof SendPresenceRequest
         */
        delay?: number;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum SendPresenceRequestPresenceEnum {
        typing = "typing",
        recording = "recording",
        pause = "pause"
    }
    export function SendPresenceRequestFromJSON(json: any): SendPresenceRequest;
    export function SendPresenceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendPresenceRequest;
    export function SendPresenceRequestToJSON(value?: SendPresenceRequest | null): any;
}
declare module "models/Sender" {
    /**
     *
     * @export
     * @interface Sender
     */
    export interface Sender {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof Sender
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof Sender
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof Sender
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof Sender
         */
        edit?: string;
    }
    export function SenderFromJSON(json: any): Sender;
    export function SenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sender;
    export function SenderToJSON(value?: Sender | null): any;
}
declare module "models/SenderAudio" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderAudio
     */
    export interface SenderAudio {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderAudio
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderAudio
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderAudio
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderAudio
         */
        edit?: string;
        /**
         *
         * @type {_}
         * @memberof SenderAudio
         */
        media: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderAudio
         */
        mime_type?: string;
        /**
         * Optional. For audio files, this field indicates the duration of the audio file in seconds.
         * @type {number}
         * @memberof SenderAudio
         */
        seconds?: number;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderAudio
         */
        view_once?: boolean;
    }
    export function SenderAudioFromJSON(json: any): SenderAudio;
    export function SenderAudioFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderAudio;
    export function SenderAudioToJSON(value?: SenderAudio | null): any;
}
declare module "models/SenderContact" {
    /**
     *
     * @export
     * @interface SenderContact
     */
    export interface SenderContact {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderContact
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderContact
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderContact
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderContact
         */
        edit?: string;
        /**
         * Name of contact
         * @type {string}
         * @memberof SenderContact
         */
        name: string;
        /**
         * Vcard of contact
         * @type {string}
         * @memberof SenderContact
         */
        vcard: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderContact
         */
        view_once?: boolean;
    }
    export function SenderContactFromJSON(json: any): SenderContact;
    export function SenderContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderContact;
    export function SenderContactToJSON(value?: SenderContact | null): any;
}
declare module "models/SenderContactFromPhonebook" {
    /**
     *
     * @export
     * @interface SenderContactFromPhonebook
     */
    export interface SenderContactFromPhonebook {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderContactFromPhonebook
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderContactFromPhonebook
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderContactFromPhonebook
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderContactFromPhonebook
         */
        edit?: string;
        /**
         * Name of contact
         * @type {string}
         * @memberof SenderContactFromPhonebook
         */
        name?: string;
    }
    export function SenderContactFromPhonebookFromJSON(json: any): SenderContactFromPhonebook;
    export function SenderContactFromPhonebookFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderContactFromPhonebook;
    export function SenderContactFromPhonebookToJSON(value?: SenderContactFromPhonebook | null): any;
}
declare module "models/SenderContactList" {
    import { VCard } from "models/VCard";
    /**
     *
     * @export
     * @interface SenderContactList
     */
    export interface SenderContactList {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderContactList
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderContactList
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderContactList
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderContactList
         */
        edit?: string;
        /**
         *
         * @type {Array<VCard>}
         * @memberof SenderContactList
         */
        list?: Array<VCard>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderContactList
         */
        view_once?: boolean;
    }
    export function SenderContactListFromJSON(json: any): SenderContactList;
    export function SenderContactListFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderContactList;
    export function SenderContactListToJSON(value?: SenderContactList | null): any;
}
declare module "models/SenderDocument" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderDocument
     */
    export interface SenderDocument {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderDocument
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderDocument
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderDocument
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderDocument
         */
        edit?: string;
        /**
         *
         * @type {_}
         * @memberof SenderDocument
         */
        media: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderDocument
         */
        mime_type?: string;
        /**
         * Optional. Text caption under the document.
         * @type {string}
         * @memberof SenderDocument
         */
        caption?: string;
        /**
         * Optional. File name
         * @type {string}
         * @memberof SenderDocument
         */
        filename?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderDocument
         */
        view_once?: boolean;
    }
    export function SenderDocumentFromJSON(json: any): SenderDocument;
    export function SenderDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderDocument;
    export function SenderDocumentToJSON(value?: SenderDocument | null): any;
}
declare module "models/SenderGif" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderGif
     */
    export interface SenderGif {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderGif
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderGif
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderGif
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderGif
         */
        edit?: string;
        /**
         *
         * @type {_}
         * @memberof SenderGif
         */
        media: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderGif
         */
        mime_type?: string;
        /**
         * Optional. Text caption under the media.
         * @type {string}
         * @memberof SenderGif
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof SenderGif
         */
        preview?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof SenderGif
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof SenderGif
         */
        height?: number;
        /**
         * Optional. This field indicates whether the GIF should be played automatically when the message is received.
         * @type {boolean}
         * @memberof SenderGif
         */
        autoplay?: boolean;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderGif
         */
        view_once?: boolean;
    }
    export function SenderGifFromJSON(json: any): SenderGif;
    export function SenderGifFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderGif;
    export function SenderGifToJSON(value?: SenderGif | null): any;
}
declare module "models/SenderImage" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderImage
     */
    export interface SenderImage {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderImage
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderImage
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderImage
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderImage
         */
        edit?: string;
        /**
         *
         * @type {_}
         * @memberof SenderImage
         */
        media: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderImage
         */
        mime_type?: string;
        /**
         * Optional. Text caption under the media.
         * @type {string}
         * @memberof SenderImage
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof SenderImage
         */
        preview?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof SenderImage
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof SenderImage
         */
        height?: number;
        /**
         * Whatsapp IDs of mentioned users
         * @type {Array<string>}
         * @memberof SenderImage
         */
        mentions?: Array<string>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderImage
         */
        view_once?: boolean;
    }
    export function SenderImageFromJSON(json: any): SenderImage;
    export function SenderImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderImage;
    export function SenderImageToJSON(value?: SenderImage | null): any;
}
declare module "models/SenderInteractive" {
    import { ActionProduct } from "models/ActionProduct";
    import { InteractiveType } from "models/InteractiveType";
    import { MessagePropsInteractiveBody } from "models/MessagePropsInteractiveBody";
    import { MessagePropsInteractiveFooter } from "models/MessagePropsInteractiveFooter";
    import { MessagePropsInteractiveHeader } from "models/MessagePropsInteractiveHeader";
    /**
     *
     * @export
     * @interface SenderInteractive
     */
    export interface SenderInteractive {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderInteractive
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderInteractive
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderInteractive
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderInteractive
         */
        edit?: string;
        /**
         *
         * @type {InteractiveType}
         * @memberof SenderInteractive
         */
        type?: InteractiveType;
        /**
         *
         * @type {MessagePropsInteractiveHeader}
         * @memberof SenderInteractive
         */
        header?: MessagePropsInteractiveHeader;
        /**
         *
         * @type {MessagePropsInteractiveBody}
         * @memberof SenderInteractive
         */
        body?: MessagePropsInteractiveBody;
        /**
         *
         * @type {MessagePropsInteractiveFooter}
         * @memberof SenderInteractive
         */
        footer?: MessagePropsInteractiveFooter;
        /**
         *
         * @type {ActionProduct}
         * @memberof SenderInteractive
         */
        action?: ActionProduct;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderInteractive
         */
        view_once?: boolean;
    }
    export function SenderInteractiveFromJSON(json: any): SenderInteractive;
    export function SenderInteractiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderInteractive;
    export function SenderInteractiveToJSON(value?: SenderInteractive | null): any;
}
declare module "models/SenderLinkPreview" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderLinkPreview
     */
    export interface SenderLinkPreview {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderLinkPreview
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderLinkPreview
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderLinkPreview
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderLinkPreview
         */
        edit?: string;
        /**
         * Message text
         * @type {string}
         * @memberof SenderLinkPreview
         */
        body: string;
        /**
         * Title of the link
         * @type {string}
         * @memberof SenderLinkPreview
         */
        title: string;
        /**
         * Description of the link
         * @type {string}
         * @memberof SenderLinkPreview
         */
        description?: string;
        /**
         * Canonical URL of the link (for example, if the link is shortened)
         * @type {string}
         * @memberof SenderLinkPreview
         */
        canonical?: string;
        /**
         * Base64 encoded image for mini version link preview. In JPEG format
         * @type {string}
         * @memberof SenderLinkPreview
         */
        preview?: string;
        /**
         *
         * @type {_}
         * @memberof SenderLinkPreview
         */
        media?: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderLinkPreview
         */
        mime_type?: string;
        /**
         * Whatsapp IDs of mentioned users
         * @type {Array<string>}
         * @memberof SenderLinkPreview
         */
        mentions?: Array<string>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderLinkPreview
         */
        view_once?: boolean;
    }
    export function SenderLinkPreviewFromJSON(json: any): SenderLinkPreview;
    export function SenderLinkPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderLinkPreview;
    export function SenderLinkPreviewToJSON(value?: SenderLinkPreview | null): any;
}
declare module "models/SenderLiveLocation" {
    /**
     *
     * @export
     * @interface SenderLiveLocation
     */
    export interface SenderLiveLocation {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderLiveLocation
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderLiveLocation
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderLiveLocation
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderLiveLocation
         */
        edit?: string;
        /**
         * Latitude of location being sent
         * @type {number}
         * @memberof SenderLiveLocation
         */
        latitude: number;
        /**
         * Longitude of location being sent
         * @type {number}
         * @memberof SenderLiveLocation
         */
        longitude: number;
        /**
         * Address of the location
         * @type {string}
         * @memberof SenderLiveLocation
         */
        address?: string;
        /**
         * Name of the location
         * @type {string}
         * @memberof SenderLiveLocation
         */
        name?: string;
        /**
         * URL for the website where the user downloaded the location information
         * @type {string}
         * @memberof SenderLiveLocation
         */
        url?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof SenderLiveLocation
         */
        preview?: string;
        /**
         * Accuracy of the location in meters
         * @type {number}
         * @memberof SenderLiveLocation
         */
        accuracy?: number;
        /**
         * Speed of the location in meters per second
         * @type {number}
         * @memberof SenderLiveLocation
         */
        speed?: number;
        /**
         * Degrees clockwise from true north
         * @type {number}
         * @memberof SenderLiveLocation
         */
        degrees?: number;
        /**
         * Optional. Comment for the location
         * @type {string}
         * @memberof SenderLiveLocation
         */
        comment?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderLiveLocation
         */
        view_once?: boolean;
    }
    export function SenderLiveLocationFromJSON(json: any): SenderLiveLocation;
    export function SenderLiveLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderLiveLocation;
    export function SenderLiveLocationToJSON(value?: SenderLiveLocation | null): any;
}
declare module "models/SenderLocation" {
    /**
     *
     * @export
     * @interface SenderLocation
     */
    export interface SenderLocation {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderLocation
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderLocation
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderLocation
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderLocation
         */
        edit?: string;
        /**
         * Latitude of location being sent
         * @type {number}
         * @memberof SenderLocation
         */
        latitude: number;
        /**
         * Longitude of location being sent
         * @type {number}
         * @memberof SenderLocation
         */
        longitude: number;
        /**
         * Address of the location
         * @type {string}
         * @memberof SenderLocation
         */
        address?: string;
        /**
         * Name of the location
         * @type {string}
         * @memberof SenderLocation
         */
        name?: string;
        /**
         * URL for the website where the user downloaded the location information
         * @type {string}
         * @memberof SenderLocation
         */
        url?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof SenderLocation
         */
        preview?: string;
        /**
         * Accuracy of the location in meters
         * @type {number}
         * @memberof SenderLocation
         */
        accuracy?: number;
        /**
         * Speed of the location in meters per second
         * @type {number}
         * @memberof SenderLocation
         */
        speed?: number;
        /**
         * Degrees clockwise from true north
         * @type {number}
         * @memberof SenderLocation
         */
        degrees?: number;
        /**
         * Optional. Comment for the location
         * @type {string}
         * @memberof SenderLocation
         */
        comment?: string;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderLocation
         */
        view_once?: boolean;
    }
    export function SenderLocationFromJSON(json: any): SenderLocation;
    export function SenderLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderLocation;
    export function SenderLocationToJSON(value?: SenderLocation | null): any;
}
declare module "models/SenderMedia" {
    /**
     *
     * @export
     * @interface SenderMedia
     */
    export interface SenderMedia {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderMedia
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderMedia
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderMedia
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderMedia
         */
        edit?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof SenderMedia
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof SenderMedia
         */
        height?: number;
        /**
         * Whatsapp IDs of mentioned users
         * @type {Array<string>}
         * @memberof SenderMedia
         */
        mentions?: Array<string>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderMedia
         */
        view_once?: boolean;
        /**
         * Optional. Text caption under the document.
         * @type {string}
         * @memberof SenderMedia
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof SenderMedia
         */
        preview?: string;
        /**
         * Optional. This field indicates whether the GIF should be played automatically when the message is received.
         * @type {boolean}
         * @memberof SenderMedia
         */
        autoplay?: boolean;
        /**
         * Optional. For stickers, this field indicates whether the sticker is animated.
         * @type {boolean}
         * @memberof SenderMedia
         */
        animated?: boolean;
        /**
         * Optional. File name
         * @type {string}
         * @memberof SenderMedia
         */
        filename?: string;
        /**
         * Optional. For audio files, this field indicates the duration of the audio file in seconds.
         * @type {number}
         * @memberof SenderMedia
         */
        seconds?: number;
        /**
         * Time in seconds to simulate recording voice
         * @type {number}
         * @memberof SenderMedia
         */
        recording_time?: number;
    }
    export function SenderMediaFromJSON(json: any): SenderMedia;
    export function SenderMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderMedia;
    export function SenderMediaToJSON(value?: SenderMedia | null): any;
}
declare module "models/SenderPoll" {
    /**
     *
     * @export
     * @interface SenderPoll
     */
    export interface SenderPoll {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderPoll
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderPoll
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderPoll
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderPoll
         */
        edit?: string;
        /**
         * Title of poll
         * @type {string}
         * @memberof SenderPoll
         */
        title: string;
        /**
         * Options of poll
         * @type {Array<string>}
         * @memberof SenderPoll
         */
        options: Array<string>;
        /**
         * Number of selectable options in poll (max is options.length)
         * @type {number}
         * @memberof SenderPoll
         */
        count?: number;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderPoll
         */
        view_once?: boolean;
    }
    export function SenderPollFromJSON(json: any): SenderPoll;
    export function SenderPollFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderPoll;
    export function SenderPollToJSON(value?: SenderPoll | null): any;
}
declare module "models/SenderProductFromCatalog" {
    /**
     *
     * @export
     * @interface SenderProductFromCatalog
     */
    export interface SenderProductFromCatalog {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderProductFromCatalog
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderProductFromCatalog
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderProductFromCatalog
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderProductFromCatalog
         */
        edit?: string;
        /**
         * Catalog ID
         * @type {string}
         * @memberof SenderProductFromCatalog
         */
        catalog_id?: string;
    }
    export function SenderProductFromCatalogFromJSON(json: any): SenderProductFromCatalog;
    export function SenderProductFromCatalogFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderProductFromCatalog;
    export function SenderProductFromCatalogToJSON(value?: SenderProductFromCatalog | null): any;
}
declare module "models/SenderSticker" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderSticker
     */
    export interface SenderSticker {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderSticker
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderSticker
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderSticker
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderSticker
         */
        edit?: string;
        /**
         *
         * @type {_}
         * @memberof SenderSticker
         */
        media: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderSticker
         */
        mime_type?: string;
        /**
         * Optional. For stickers, this field indicates whether the sticker is animated.
         * @type {boolean}
         * @memberof SenderSticker
         */
        animated?: boolean;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof SenderSticker
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof SenderSticker
         */
        height?: number;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderSticker
         */
        view_once?: boolean;
    }
    export function SenderStickerFromJSON(json: any): SenderSticker;
    export function SenderStickerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderSticker;
    export function SenderStickerToJSON(value?: SenderSticker | null): any;
}
declare module "models/SenderText" {
    /**
     *
     * @export
     * @interface SenderText
     */
    export interface SenderText {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderText
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderText
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderText
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderText
         */
        edit?: string;
        /**
         * Message text
         * @type {string}
         * @memberof SenderText
         */
        body: string;
        /**
         * Time in seconds to simulate typing
         * @type {number}
         * @memberof SenderText
         */
        typing_time?: number;
        /**
         * Whatsapp IDs of mentioned users
         * @type {Array<string>}
         * @memberof SenderText
         */
        mentions?: Array<string>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderText
         */
        view_once?: boolean;
    }
    export function SenderTextFromJSON(json: any): SenderText;
    export function SenderTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderText;
    export function SenderTextToJSON(value?: SenderText | null): any;
}
declare module "models/SenderVideo" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderVideo
     */
    export interface SenderVideo {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderVideo
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderVideo
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderVideo
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderVideo
         */
        edit?: string;
        /**
         *
         * @type {_}
         * @memberof SenderVideo
         */
        media: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderVideo
         */
        mime_type?: string;
        /**
         * Optional. Text caption under the media.
         * @type {string}
         * @memberof SenderVideo
         */
        caption?: string;
        /**
         * Optional. Base64 encoded preview of the media. In JPEG format.
         * @type {string}
         * @memberof SenderVideo
         */
        preview?: string;
        /**
         * Width of the media in pixels
         * @type {number}
         * @memberof SenderVideo
         */
        width?: number;
        /**
         * Height of the media in pixels
         * @type {number}
         * @memberof SenderVideo
         */
        height?: number;
        /**
         * Whatsapp IDs of mentioned users
         * @type {Array<string>}
         * @memberof SenderVideo
         */
        mentions?: Array<string>;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderVideo
         */
        view_once?: boolean;
    }
    export function SenderVideoFromJSON(json: any): SenderVideo;
    export function SenderVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderVideo;
    export function SenderVideoToJSON(value?: SenderVideo | null): any;
}
declare module "models/SenderVoice" {
    import { _ } from "models/_";
    /**
     *
     * @export
     * @interface SenderVoice
     */
    export interface SenderVoice {
        /**
         * Chat ID or phone number where the message will be sent
         * @type {string}
         * @memberof SenderVoice
         */
        to: string;
        /**
         * Message ID of the message to be quoted
         * @type {string}
         * @memberof SenderVoice
         */
        quoted?: string;
        /**
         * Time in seconds for the message to be deleted
         * @type {number}
         * @memberof SenderVoice
         */
        ephemeral?: number;
        /**
         * Message ID of the message to be edited
         * @type {string}
         * @memberof SenderVoice
         */
        edit?: string;
        /**
         *
         * @type {_}
         * @memberof SenderVoice
         */
        media: _ | null;
        /**
         * Mime type of media
         * @type {string}
         * @memberof SenderVoice
         */
        mime_type?: string;
        /**
         * Optional. For audio files, this field indicates the duration of the audio file in seconds.
         * @type {number}
         * @memberof SenderVoice
         */
        seconds?: number;
        /**
         * Time in seconds to simulate recording voice
         * @type {number}
         * @memberof SenderVoice
         */
        recording_time?: number;
        /**
         * Is view once
         * @type {boolean}
         * @memberof SenderVoice
         */
        view_once?: boolean;
    }
    export function SenderVoiceFromJSON(json: any): SenderVoice;
    export function SenderVoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderVoice;
    export function SenderVoiceToJSON(value?: SenderVoice | null): any;
}
declare module "models/SentMessage" {
    import { Message } from "models/Message";
    /**
     *
     * @export
     * @interface SentMessage
     */
    export interface SentMessage {
        /**
         * Message sent
         * @type {boolean}
         * @memberof SentMessage
         */
        sent: boolean;
        /**
         *
         * @type {Message}
         * @memberof SentMessage
         */
        message?: Message;
    }
    export function SentMessageFromJSON(json: any): SentMessage;
    export function SentMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentMessage;
    export function SentMessageToJSON(value?: SentMessage | null): any;
}
declare module "models/Webhook" {
    import { Event } from "models/Event";
    /**
     *
     * @export
     * @interface Webhook
     */
    export interface Webhook {
        /**
         * Inbound and outbound notifications are routed to this URL.
         * @type {string}
         * @memberof Webhook
         */
        url: string;
        /**
         * Tracked events. <br/>"messages" - got new message/got offline messages/edit message/delete message;<br/>"statuses" - got message status/got offline message status;<br/>"chats" - got chat/chat update/chat remove;<br/>"contacts" - contact update;<br/>"presences" - got presences<br/>"groups" - new group/participants update/group update;<br/>"calls" - got call events<br/>labels" - new label/remove label<br/>"users" - login user/logout user<br/>"channel" - instance status changed/QR-code update<br/>"service" - special notifications<br/><br/>"message", "ack", "chat", "status" - is deprecated, use "messages", "statuses", "chats", "channel" instead.
         * @type {Array<Event>}
         * @memberof Webhook
         */
        events?: Array<Event>;
        /**
         * Request method for sending hook.
         * @type {string}
         * @memberof Webhook
         */
        mode?: WebhookModeEnum;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum WebhookModeEnum {
        body = "body",
        path = "path",
        method = "method"
    }
    export function WebhookFromJSON(json: any): Webhook;
    export function WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Webhook;
    export function WebhookToJSON(value?: Webhook | null): any;
}
declare module "models/Settings" {
    import { MediaSettings } from "models/MediaSettings";
    import { Webhook } from "models/Webhook";
    /**
     *
     * @export
     * @interface Settings
     */
    export interface Settings {
        /**
         * Backoff delay for a failed callback in milliseconds This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.
         * @type {number}
         * @memberof Settings
         */
        callback_backoff_delay_ms?: number;
        /**
         * Maximum delay for a failed callback in milliseconds
         * @type {number}
         * @memberof Settings
         */
        max_callback_backoff_delay_ms?: number;
        /**
         * Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.
         * @type {boolean}
         * @memberof Settings
         */
        callback_persist?: boolean;
        /**
         *
         * @type {MediaSettings}
         * @memberof Settings
         */
        media?: MediaSettings;
        /**
         *
         * @type {Array<Webhook>}
         * @memberof Settings
         */
        webhooks?: Array<Webhook>;
        /**
         * Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.
         * @type {string}
         * @memberof Settings
         */
        on_call_pager?: string;
        /**
         * When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted. When messages are sent, they are stored in a local database. This database is used as the application's history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.
         * @type {boolean}
         * @memberof Settings
         */
        pass_through?: boolean;
        /**
         * Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification.
         * @type {boolean}
         * @memberof Settings
         */
        sent_status?: boolean;
        /**
         * Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.
         * @type {string}
         * @memberof Settings
         */
        proxy?: string;
    }
    export function SettingsFromJSON(json: any): Settings;
    export function SettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Settings;
    export function SettingsToJSON(value?: Settings | null): any;
}
declare module "models/Star" {
    /**
     *
     * @export
     * @interface Star
     */
    export interface Star {
        /**
         * Indicates if the message is starred or not
         * @type {boolean}
         * @memberof Star
         */
        starred?: boolean;
    }
    export function StarFromJSON(json: any): Star;
    export function StarFromJSONTyped(json: any, ignoreDiscriminator: boolean): Star;
    export function StarToJSON(value?: Star | null): any;
}
declare module "models/UpdateGroupInfoRequest" {
    /**
     *
     * @export
     * @interface UpdateGroupInfoRequest
     */
    export interface UpdateGroupInfoRequest {
        /**
         *
         * @type {string}
         * @memberof UpdateGroupInfoRequest
         */
        subject: string;
        /**
         *
         * @type {string}
         * @memberof UpdateGroupInfoRequest
         */
        description: string;
    }
    export function UpdateGroupInfoRequestFromJSON(json: any): UpdateGroupInfoRequest;
    export function UpdateGroupInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGroupInfoRequest;
    export function UpdateGroupInfoRequestToJSON(value?: UpdateGroupInfoRequest | null): any;
}
declare module "models/UpdateSettings" {
    import { Settings } from "models/Settings";
    /**
     *
     * @export
     * @interface UpdateSettings
     */
    export interface UpdateSettings {
        /**
         *
         * @type {Settings}
         * @memberof UpdateSettings
         */
        before_update: Settings;
        /**
         *
         * @type {Settings}
         * @memberof UpdateSettings
         */
        after_update: Settings;
        /**
         *
         * @type {Array<string>}
         * @memberof UpdateSettings
         */
        changes: Array<UpdateSettingsChangesEnum>;
    }
    /**
    * @export
    * @enum {string}
    */
    export enum UpdateSettingsChangesEnum {
        callback_backoff_delay_ms = "callback_backoff_delay_ms",
        max_callback_backoff_delay_ms = "max_callback_backoff_delay_ms",
        callback_persist = "callback_persist",
        media = "media",
        webhooks = "webhooks",
        on_call_pager = "on_call_pager",
        pass_through = "pass_through",
        sent_status = "sent_status"
    }
    export function UpdateSettingsFromJSON(json: any): UpdateSettings;
    export function UpdateSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSettings;
    export function UpdateSettingsToJSON(value?: UpdateSettings | null): any;
}
declare module "models/UploadMedia" {
    /**
     *
     * @export
     * @interface UploadMedia
     */
    export interface UploadMedia {
        /**
         * Media ID
         * @type {string}
         * @memberof UploadMedia
         */
        id?: string;
    }
    export function UploadMediaFromJSON(json: any): UploadMedia;
    export function UploadMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadMedia;
    export function UploadMediaToJSON(value?: UploadMedia | null): any;
}
declare module "models/UploadMediaResponse" {
    import { UploadMedia } from "models/UploadMedia";
    /**
     *
     * @export
     * @interface UploadMediaResponse
     */
    export interface UploadMediaResponse {
        /**
         *
         * @type {Array<UploadMedia>}
         * @memberof UploadMediaResponse
         */
        media?: Array<UploadMedia>;
    }
    export function UploadMediaResponseFromJSON(json: any): UploadMediaResponse;
    export function UploadMediaResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadMediaResponse;
    export function UploadMediaResponseToJSON(value?: UploadMediaResponse | null): any;
}
declare module "models/UserProfile" {
    /**
     *
     * @export
     * @interface UserProfile
     */
    export interface UserProfile {
        /**
         * User name.
         * @type {string}
         * @memberof UserProfile
         */
        name?: string;
        /**
         * User info in About section.
         * @type {string}
         * @memberof UserProfile
         */
        about?: string;
        /**
         * Profile preview icon url.
         * @type {string}
         * @memberof UserProfile
         */
        icon?: string;
    }
    export function UserProfileFromJSON(json: any): UserProfile;
    export function UserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfile;
    export function UserProfileToJSON(value?: UserProfile | null): any;
}
declare module "models/UserProfileUpdate" {
    /**
     *
     * @export
     * @interface UserProfileUpdate
     */
    export interface UserProfileUpdate {
        /**
         * New user name.
         * @type {string}
         * @memberof UserProfileUpdate
         */
        name?: string;
        /**
         * New user info in About section.
         * @type {string}
         * @memberof UserProfileUpdate
         */
        about?: string;
        /**
         * New user icon in base64/url.
         * @type {string}
         * @memberof UserProfileUpdate
         */
        icon?: string;
    }
    export function UserProfileUpdateFromJSON(json: any): UserProfileUpdate;
    export function UserProfileUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfileUpdate;
    export function UserProfileUpdateToJSON(value?: UserProfileUpdate | null): any;
}
declare module "models/WebhookContactProfile" {
    /**
     *
     * @export
     * @interface WebhookContactProfile
     */
    export interface WebhookContactProfile {
        /**
         * Optional. As of v2.21.4, contains the sender's profile name.
         * @type {string}
         * @memberof WebhookContactProfile
         */
        name?: string;
    }
    export function WebhookContactProfileFromJSON(json: any): WebhookContactProfile;
    export function WebhookContactProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookContactProfile;
    export function WebhookContactProfileToJSON(value?: WebhookContactProfile | null): any;
}
declare module "models/WebhookContact" {
    import { WebhookContactProfile } from "models/WebhookContactProfile";
    /**
     *
     * @export
     * @interface WebhookContact
     */
    export interface WebhookContact {
        /**
         *
         * @type {WebhookContactProfile}
         * @memberof WebhookContact
         */
        profile?: WebhookContactProfile;
        /**
         * The WhatsApp ID of the contact
         * @type {string}
         * @memberof WebhookContact
         */
        wa_id?: string;
    }
    export function WebhookContactFromJSON(json: any): WebhookContact;
    export function WebhookContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookContact;
    export function WebhookContactToJSON(value?: WebhookContact | null): any;
}
declare module "models/WebhookStatus" {
    import { MessageStatus } from "models/MessageStatus";
    /**
     *
     * @export
     * @interface WebhookStatus
     */
    export interface WebhookStatus {
        /**
         *
         * @type {Array<Error>}
         * @memberof WebhookStatus
         */
        errors?: Array<Error>;
        /**
         * Message ID from event
         * @type {string}
         * @memberof WebhookStatus
         */
        id?: string;
        /**
         * WhatsApp ID of recipient
         * @type {string}
         * @memberof WebhookStatus
         */
        recipient_id?: string;
        /**
         *
         * @type {MessageStatus}
         * @memberof WebhookStatus
         */
        status?: MessageStatus;
        /**
         * Timestamp of the status message
         * @type {string}
         * @memberof WebhookStatus
         */
        timestamp?: string;
    }
    export function WebhookStatusFromJSON(json: any): WebhookStatus;
    export function WebhookStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookStatus;
    export function WebhookStatusToJSON(value?: WebhookStatus | null): any;
}
declare module "models/WebhookPayload" {
    import { CallEvent } from "models/CallEvent";
    import { Chat } from "models/Chat";
    import { ChatUpdate } from "models/ChatUpdate";
    import { Contact } from "models/Contact";
    import { ContactUpdate } from "models/ContactUpdate";
    import { Event } from "models/Event";
    import { Group } from "models/Group";
    import { GroupUpdate } from "models/GroupUpdate";
    import { Health } from "models/Health";
    import { Label } from "models/Label";
    import { Message } from "models/Message";
    import { MessageUpdate } from "models/MessageUpdate";
    import { ParticipantEvent } from "models/ParticipantEvent";
    import { Presence } from "models/Presence";
    import { QR } from "models/QR";
    import { WebhookContact } from "models/WebhookContact";
    import { WebhookStatus } from "models/WebhookStatus";
    /**
     *
     * @export
     * @interface WebhookPayload
     */
    export interface WebhookPayload {
        /**
         *
         * @type {Array<WebhookContact>}
         * @memberof WebhookPayload
         */
        contacts?: Array<WebhookContact>;
        /**
         * The messages array contains all messages that were sent to the webhook URL. Sent on event "messages.post" or "messages.put"
         * @type {Array<Message>}
         * @memberof WebhookPayload
         */
        messages?: Array<Message>;
        /**
         * The messages updates array contains all messages updates that were sent to the webhook URL. Sent on event "messages.patch"
         * @type {Array<MessageUpdate>}
         * @memberof WebhookPayload
         */
        messages_updates?: Array<MessageUpdate>;
        /**
         * The messages removed array contains all messages removed that were sent to the webhook URL. Sent on event "messages.delete"
         * @type {Array<string>}
         * @memberof WebhookPayload
         */
        messages_removed?: Array<string>;
        /**
         * The messages removed all contains the chat ID of the chat that was cleared. Sent on event "messages.delete"
         * @type {string}
         * @memberof WebhookPayload
         */
        messages_removed_all?: string;
        /**
         * The messages statuses array contains all statuses that were sent to the webhook URL. Sent on event "statuses.post" or "statuses.put"
         * @type {Array<WebhookStatus>}
         * @memberof WebhookPayload
         */
        statuses?: Array<WebhookStatus>;
        /**
         * The chats array contains all chats that were sent to the webhook URL. Sent on event "chats.post" or "chats.put"
         * @type {Array<Chat>}
         * @memberof WebhookPayload
         */
        chats?: Array<Chat>;
        /**
         * The chats updates array contains all chats updates that were sent to the webhook URL. Sent on event "chats.patch"
         * @type {Array<ChatUpdate>}
         * @memberof WebhookPayload
         */
        chats_updates?: Array<ChatUpdate>;
        /**
         * The chats removed array contains all chats removed that were sent to the webhook URL. Sent on event "chats.delete"
         * @type {Array<string>}
         * @memberof WebhookPayload
         */
        chats_removed?: Array<string>;
        /**
         * The contacts updates array contains all contacts updates that were sent to the webhook URL. Sent on event "contacts.patch"
         * @type {Array<ContactUpdate>}
         * @memberof WebhookPayload
         */
        contacts_updates?: Array<ContactUpdate>;
        /**
         * The groups array contains all groups that were sent to the webhook URL. Sent on event "groups.post"
         * @type {Array<Group>}
         * @memberof WebhookPayload
         */
        groups?: Array<Group>;
        /**
         * The groups participants event array contains all groups participants event that were sent to the webhook URL. Sent on event "groups.put"
         * @type {Array<ParticipantEvent>}
         * @memberof WebhookPayload
         */
        groups_participants?: Array<ParticipantEvent>;
        /**
         * The groups updates array contains all groups updates that were sent to the webhook URL. Sent on event "groups.patch"
         * @type {Array<GroupUpdate>}
         * @memberof WebhookPayload
         */
        groups_updates?: Array<GroupUpdate>;
        /**
         * The presences array contains all presences that were sent to the webhook URL. Sent on event "presences.post"
         * @type {Array<Presence>}
         * @memberof WebhookPayload
         */
        presences?: Array<Presence>;
        /**
         * The labels array contains all labels that were sent to the webhook URL. Sent on event "labels.post"
         * @type {Array<Label>}
         * @memberof WebhookPayload
         */
        labels?: Array<Label>;
        /**
         * The labels removed array contains all labels removed that were sent to the webhook URL. Sent on event "labels.delete"
         * @type {Array<string>}
         * @memberof WebhookPayload
         */
        labels_removed?: Array<string>;
        /**
         * The calls array contains all calls that were sent to the webhook URL. Sent on event "calls.post"
         * @type {Array<CallEvent>}
         * @memberof WebhookPayload
         */
        calls?: Array<CallEvent>;
        /**
         *
         * @type {QR}
         * @memberof WebhookPayload
         */
        qr?: QR;
        /**
         *
         * @type {Health}
         * @memberof WebhookPayload
         */
        health?: Health;
        /**
         *
         * @type {Contact}
         * @memberof WebhookPayload
         */
        user?: Contact;
        /**
         *
         * @type {Array<Error>}
         * @memberof WebhookPayload
         */
        errors?: Array<Error>;
        /**
         *
         * @type {Event}
         * @memberof WebhookPayload
         */
        event?: Event;
        /**
         * The channel ID
         * @type {string}
         * @memberof WebhookPayload
         */
        channel_id?: string;
    }
    export function WebhookPayloadFromJSON(json: any): WebhookPayload;
    export function WebhookPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookPayload;
    export function WebhookPayloadToJSON(value?: WebhookPayload | null): any;
}
declare module "models/index" {
    export * from "models/ActionButtons";
    export * from "models/ActionList";
    export * from "models/ActionListProductItems";
    export * from "models/ActionListRows";
    export * from "models/ActionListSections";
    export * from "models/ActionProduct";
    export * from "models/ArchiveChatRequest";
    export * from "models/AuthCode";
    export * from "models/Button";
    export * from "models/ButtonsReply";
    export * from "models/CallEvent";
    export * from "models/ChannelStatus";
    export * from "models/Chat";
    export * from "models/ChatUpdate";
    export * from "models/ChatsList";
    export * from "models/CheckContact";
    export * from "models/CheckContactRequest";
    export * from "models/CheckContactResponse";
    export * from "models/Contact";
    export * from "models/ContactUpdate";
    export * from "models/ContactsList";
    export * from "models/CreateGroupRequest";
    export * from "models/Currency";
    export * from "models/Event";
    export * from "models/ForwardMessage";
    export * from "models/Group";
    export * from "models/GroupInvite";
    export * from "models/GroupUpdate";
    export * from "models/GroupsList";
    export * from "models/HSMButton";
    export * from "models/HeaderType";
    export * from "models/Health";
    export * from "models/InteractiveType";
    export * from "models/Iterator";
    export * from "models/Label";
    export * from "models/LabelAssociations";
    export * from "models/Limits";
    export * from "models/ListParticipantsRequest";
    export * from "models/ListReply";
    export * from "models/MediaMessageType";
    export * from "models/MediaSettings";
    export * from "models/Mentions";
    export * from "models/Message";
    export * from "models/MessageAction";
    export * from "models/MessageContent";
    export * from "models/MessageContentAudio";
    export * from "models/MessageContentContact";
    export * from "models/MessageContentContacts";
    export * from "models/MessageContentDocument";
    export * from "models/MessageContentHSM";
    export * from "models/MessageContentHSMHeader";
    export * from "models/MessageContentImage";
    export * from "models/MessageContentInteractive";
    export * from "models/MessageContentLinkPreview";
    export * from "models/MessageContentLiveLocation";
    export * from "models/MessageContentLocation";
    export * from "models/MessageContentMedia";
    export * from "models/MessageContentOrder";
    export * from "models/MessageContentPoll";
    export * from "models/MessageContentProductItems";
    export * from "models/MessageContentReply";
    export * from "models/MessageContentSticker";
    export * from "models/MessageContentSystem";
    export * from "models/MessageContentText";
    export * from "models/MessageContentVideo";
    export * from "models/MessageContext";
    export * from "models/MessagePropsAudio";
    export * from "models/MessagePropsDocument";
    export * from "models/MessagePropsGif";
    export * from "models/MessagePropsImageOrVideo";
    export * from "models/MessagePropsInteractive";
    export * from "models/MessagePropsInteractiveBody";
    export * from "models/MessagePropsInteractiveFooter";
    export * from "models/MessagePropsInteractiveHeader";
    export * from "models/MessagePropsLinkPreview";
    export * from "models/MessagePropsPoll";
    export * from "models/MessagePropsSticker";
    export * from "models/MessagePropsText";
    export * from "models/MessagePropsVoice";
    export * from "models/MessageReaction";
    export * from "models/MessageSource";
    export * from "models/MessageStatus";
    export * from "models/MessageType";
    export * from "models/MessageUpdate";
    export * from "models/MessagesList";
    export * from "models/ModelError";
    export * from "models/NewGroup";
    export * from "models/Participant";
    export * from "models/ParticipantEvent";
    export * from "models/Participants";
    export * from "models/PatchChatRequest";
    export * from "models/PollResults";
    export * from "models/Presence";
    export * from "models/Product";
    export * from "models/ProductItem";
    export * from "models/ProductsList";
    export * from "models/QR";
    export * from "models/QRParameters";
    export * from "models/ReactToMessage";
    export * from "models/ResponseError";
    export * from "models/ResponseSuccess";
    export * from "models/SendMePresenceRequest";
    export * from "models/SendMedia";
    export * from "models/SendPresenceRequest";
    export * from "models/Sender";
    export * from "models/SenderAudio";
    export * from "models/SenderContact";
    export * from "models/SenderContactFromPhonebook";
    export * from "models/SenderContactList";
    export * from "models/SenderDocument";
    export * from "models/SenderGif";
    export * from "models/SenderImage";
    export * from "models/SenderInteractive";
    export * from "models/SenderLinkPreview";
    export * from "models/SenderLiveLocation";
    export * from "models/SenderLocation";
    export * from "models/SenderMedia";
    export * from "models/SenderPoll";
    export * from "models/SenderProductFromCatalog";
    export * from "models/SenderSticker";
    export * from "models/SenderText";
    export * from "models/SenderVideo";
    export * from "models/SenderVoice";
    export * from "models/SentMessage";
    export * from "models/Settings";
    export * from "models/Size";
    export * from "models/Star";
    export * from "models/UpdateGroupInfoRequest";
    export * from "models/UpdateSettings";
    export * from "models/UploadMedia";
    export * from "models/UploadMediaResponse";
    export * from "models/UserProfile";
    export * from "models/UserProfileUpdate";
    export * from "models/VCard";
    export * from "models/ViewOnce";
    export * from "models/Webhook";
    export * from "models/WebhookContact";
    export * from "models/WebhookContactProfile";
    export * from "models/WebhookPayload";
    export * from "models/WebhookStatus";
}
