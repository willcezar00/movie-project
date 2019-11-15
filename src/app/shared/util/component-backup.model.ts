export class ComponentBackup{

    /**
     * Método que faz backups das propriedades do componente
     * @param component Componente a ter os properties copiados
     * @param propertiesList Lista com o nome das propriedades a serem copiadas
     */
    doComponentBackup(component: any, propertiesList: any[]) {
        let backup = {};
        for (let i = 0; i < propertiesList.length; i++) {
            backup[propertiesList[i]] = component[propertiesList[i]];
        }
    }
}