/* tslint:disable */
/* eslint-disable */
/**
 * Name Done - Name Service
 * A name service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.6
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

export interface GetDomainNamesRequest {
    name?: string;
}

/**
 * 
 */
export class DomainNameApi extends runtime.BaseAPI {

    /**
     * Get a list of domain names
     */
    async getDomainNamesRaw(requestParameters: GetDomainNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NameResponseDto>> {
        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/name/domain`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NameResponseDtoFromJSON(jsonValue));
    }

    /**
     * Get a list of domain names
     */
    async getDomainNames(requestParameters: GetDomainNamesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NameResponseDto> {
        const response = await this.getDomainNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
