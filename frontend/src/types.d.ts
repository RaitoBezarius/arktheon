type Deployment = {
  id: number;
  created_at: string;
  toplevel: string;
  operator_id: string;
  target_machine_id: string;
};

interface Machine {
  identifier: string;
}

type Versions = Array<string?>;

interface RawDiff {
  added: { [index: string]: Versions };
  removed: { [index: string]: Versions };
  changed: { [index: string]: { old: Versions; new: Versions } };
}

interface Diff {
  added: Map<string, Versions>;
  removed: Map<string, Versions>;
  changed: Map<string, { old: Versions; new: Versions }>;
}

interface Package {
  name: string;
  versions: Versions;
}

interface PackageDiff {
  name: string;
  old: Versions;
  new: Versions;
}