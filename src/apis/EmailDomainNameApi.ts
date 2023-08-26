/* tslint:disable */
/* eslint-disable */
/**
 * Name Done - Name Service
 * A name service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BadRequestResponseDto,
  NameResponseDto,
} from '../models/index';
import {
    BadRequestResponseDtoFromJSON,
    BadRequestResponseDtoToJSON,
    NameResponseDtoFromJSON,
    NameResponseDtoToJSON,
} from '../models/index';

export interface GetEmailDomainNamesRequest {
    name: string;
}

/**
 * 
 */
export class EmailDomainNameApi extends runtime.BaseAPI {

    /**
     * Get a list of email domain names
     */
    async getEmailDomainNamesRaw(requestParameters: GetEmailDomainNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NameResponseDto>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getEmailDomainNames.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/name/email-domain`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NameResponseDtoFromJSON(jsonValue));
    }

    /**
     * Get a list of email domain names
     */
    async getEmailDomainNames(requestParameters: GetEmailDomainNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NameResponseDto> {
        const response = await this.getEmailDomainNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
