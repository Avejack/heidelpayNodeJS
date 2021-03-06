/**
 * Fetch Adapter
 *
 * @export
 * @class FetchAdapter
 */
export declare class FetchAdapter {
    private api;
    private locale?;
    constructor(locale?: string, env?: string);
    /**
     * @param  {string} url
     */
    get(url: string, privateKey: string, isRawUrl?: Boolean): Promise<Response>;
    /**
     * @param  {string} url
     * @param  {object} body
     */
    post(url: string, body: object, privateKey: string, isRawUrl?: Boolean): Promise<Response>;
    /**
     * @param  {string} url
     * @param  {object} body
     */
    put(url: string, body: object, privateKey: string): Promise<any>;
    /**
     * @param  {string} url
     * @param  {object} body
     */
    delete(url: string, body: object, privateKey: string): Promise<any>;
    private _fetch;
    private _parseJSON;
}
