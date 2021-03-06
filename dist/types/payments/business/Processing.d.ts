export default class Processing {
    private _uniqueId;
    private _shortId;
    /**
     * Get UniqueId
     *
     * @returns {string}
     */
    getUniqueId(): string;
    /**
     * Set Unique Id
     *
     * @param {string} uniqueId
     * @returns {Processing}
     */
    setUniqueId(uniqueId: string): Processing;
    /**
     * Get Short Id
     *
     * @returns {string}
     */
    getShortId(): string;
    /**
     * Set Short Id
     *
     * @param {string} shortId
     * @returns {Processing}
     */
    setShortId(shortId: string): Processing;
}
