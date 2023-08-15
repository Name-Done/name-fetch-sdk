/* tslint:disable */
/* eslint-disable */
/**
 * Name Done - First Name Service
 * An first name service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.1
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
} from '../models';
import {
    BadRequestResponseDtoFromJSON,
    BadRequestResponseDtoToJSON,
    NameResponseDtoFromJSON,
    NameResponseDtoToJSON,
} from '../models';

export interface FamilyNameControllerGetRequest {
    name: string;
}

/**
 * 
 */
export class FamilyNameApi extends runtime.BaseAPI {

    /**
     * Get a list of family names
     */
    async familyNameControllerGetRaw(requestParameters: FamilyNameControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NameResponseDto>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling familyNameControllerGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/name/family`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NameResponseDtoFromJSON(jsonValue));
    }

    /**
     * Get a list of family names
     */
    async familyNameControllerGet(requestParameters: FamilyNameControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NameResponseDto> {
        const response = await this.familyNameControllerGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}