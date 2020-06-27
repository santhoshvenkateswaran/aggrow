import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cropPredictions = {
            crop1: 'Maize',
            crop2: 'Sunflower',
            crop3: 'Ragi',
        };

        const modelRun = {
            result: 'SUCCESS',
        };

        return {
            predict: cropPredictions,
            train: modelRun,
        };
    }
}
