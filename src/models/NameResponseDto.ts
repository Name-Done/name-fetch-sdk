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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NameResponseDto
 */
export interface NameResponseDto {
    /**
     * An array of possible first names
     * @type {Array<string>}
     * @memberof NameResponseDto
     */
    names: Array<string>;
}

/**
 * Check if a given object implements the NameResponseDto interface.
 */
export function instanceOfNameResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "names" in value;

    return isInstance;
}

export function NameResponseDtoFromJSON(json: any): NameResponseDto {
    return NameResponseDtoFromJSONTyped(json, false);
}

export function NameResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'names': json['names'],
    };
}

export function NameResponseDtoToJSON(value?: NameResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'names': value.names,
    };
}
