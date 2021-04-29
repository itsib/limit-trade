import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Order entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Order entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Order", id.toString(), this);
  }

  static load(id: string): Order | null {
    return store.get("Order", id) as Order | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get inputToken(): string {
    let value = this.get("inputToken");
    return value.toString();
  }

  set inputToken(value: string) {
    this.set("inputToken", Value.fromString(value));
  }

  get outputToken(): string {
    let value = this.get("outputToken");
    return value.toString();
  }

  set outputToken(value: string) {
    this.set("outputToken", Value.fromString(value));
  }

  get minReturn(): BigInt | null {
    let value = this.get("minReturn");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set minReturn(value: BigInt | null) {
    if (value === null) {
      this.unset("minReturn");
    } else {
      this.set("minReturn", Value.fromBigInt(value as BigInt));
    }
  }

  get module(): string | null {
    let value = this.get("module");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set module(value: string | null) {
    if (value === null) {
      this.unset("module");
    } else {
      this.set("module", Value.fromString(value as string));
    }
  }

  get witness(): string {
    let value = this.get("witness");
    return value.toString();
  }

  set witness(value: string) {
    this.set("witness", Value.fromString(value));
  }

  get secret(): string {
    let value = this.get("secret");
    return value.toString();
  }

  set secret(value: string) {
    this.set("secret", Value.fromString(value));
  }

  get inputAmount(): BigInt {
    let value = this.get("inputAmount");
    return value.toBigInt();
  }

  set inputAmount(value: BigInt) {
    this.set("inputAmount", Value.fromBigInt(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get bought(): BigInt | null {
    let value = this.get("bought");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set bought(value: BigInt | null) {
    if (value === null) {
      this.unset("bought");
    } else {
      this.set("bought", Value.fromBigInt(value as BigInt));
    }
  }

  get auxData(): Bytes | null {
    let value = this.get("auxData");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set auxData(value: Bytes | null) {
    if (value === null) {
      this.unset("auxData");
    } else {
      this.set("auxData", Value.fromBytes(value as Bytes));
    }
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get createdTxHash(): Bytes {
    let value = this.get("createdTxHash");
    return value.toBytes();
  }

  set createdTxHash(value: Bytes) {
    this.set("createdTxHash", Value.fromBytes(value));
  }

  get executedTxHash(): Bytes | null {
    let value = this.get("executedTxHash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set executedTxHash(value: Bytes | null) {
    if (value === null) {
      this.unset("executedTxHash");
    } else {
      this.set("executedTxHash", Value.fromBytes(value as Bytes));
    }
  }

  get cancelledTxHash(): Bytes | null {
    let value = this.get("cancelledTxHash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set cancelledTxHash(value: Bytes | null) {
    if (value === null) {
      this.unset("cancelledTxHash");
    } else {
      this.set("cancelledTxHash", Value.fromBytes(value as Bytes));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }

  get inputData(): Bytes {
    let value = this.get("inputData");
    return value.toBytes();
  }

  set inputData(value: Bytes) {
    this.set("inputData", Value.fromBytes(value));
  }
}
