export default class Metadata {
    private _id;
    private _metadata;
    constructor();
    /**
     * Set Id
     * @param {string} id
     */
    setId(id: string): Metadata;
    /**
     * Get Id
     *
     * @type {string}
     */
    getId(): string;
    /**
     * Set metadata value
     *
     * @param {object} value
     * @returns {Metadata}
     */
    setValue(value: object): Metadata;
    /**
     * Get metadata value
     *
     * @type {object}
     */
    getValue(): object;
    /**
     * Get Request Payload
     */
    getRequestPayload(): Object;
}
