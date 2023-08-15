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
 * @interface BadRequestResponseDto
 */
export interface BadRequestResponseDto {
    /**
     * HTTP status code of the error
     * @type {number}
     * @memberof BadRequestResponseDto
     */
    statusCode: number;
    /**
     * Short descriptions of the errors
     * @type {Array<string>}
     * @memberof BadRequestResponseDto
     */
    message: Array<string>;
    /**
     * Error type
     * @type {string}
     * @memberof BadRequestResponseDto
     */
    error: string;
}

/**
 * Check if a given object implements the BadRequestResponseDto interface.
 */
export function instanceOfBadRequestResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "error" in value;

    return isInstance;
}

export function BadRequestResponseDtoFromJSON(json: any): BadRequestResponseDto {
    return BadRequestResponseDtoFromJSONTyped(json, false);
}

export function BadRequestResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadRequestResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'message': json['message'],
        'error': json['error'],
    };
}

export function BadRequestResponseDtoToJSON(value?: BadRequestResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'message': value.message,
        'error': value.error,
    };
}
