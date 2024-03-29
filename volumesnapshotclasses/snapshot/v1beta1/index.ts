// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./volumeSnapshotClass";

// Import resources to register:
import { VolumeSnapshotClass } from "./volumeSnapshotClass";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:snapshot.storage.k8s.io/v1beta1:VolumeSnapshotClass":
                return new VolumeSnapshotClass(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "snapshot.storage.k8s.io/v1beta1", _module)
