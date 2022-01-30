import * as volumeSnapshotClasses from './volumesnapshotclasses';
import * as volumeSnapshotContents from './volumesnapshotcontents';
import * as volumesnapshots from './volumesnapshots';
import * as aws from '@pulumi/aws';
import * as eks from '@pulumi/eks';
import * as k8s from '@pulumi/kubernetes';
import * as pulumi from '@pulumi/pulumi';
import { Location } from '../..';

export class EKSVolumeSnapshotResource extends pulumi.ComponentResource {
  constructor(
    name: string,
    settings: {
      location: Location;
      role: aws.iam.Role;
      cluster: eks.Cluster;
    },
    opts: pulumi.ComponentResourceOptions = {}
  ) {
    super('bpaas:cluster:eks:crd', name, {}, { ...opts });

    const volumeSnapshotClassesDefinition = new volumeSnapshotClasses.Provider(`${name}-volumeSnapshotClasses`, { kubeconfig: settings.cluster.kubeconfig }, { parent: this })
    const volumeSnapshotContentsDefinition = new volumeSnapshotContents.Provider(`${name}-volumeSnapshotContents`, { kubeconfig: settings.cluster.kubeconfig }, { parent: this });
    const volumesnapshotsDefinition = new volumesnapshots.Provider(`${name}-volumesnapshots`, { kubeconfig: settings.cluster.kubeconfig }, { parent: this });

  }
}
