import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class DepositETH extends EthereumEvent {
  get params(): DepositETH__Params {
    return new DepositETH__Params(this);
  }
}

export class DepositETH__Params {
  _event: DepositETH;

  constructor(event: DepositETH) {
    this._event = event;
  }

  get _key(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _caller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OrderCancelled extends EthereumEvent {
  get params(): OrderCancelled__Params {
    return new OrderCancelled__Params(this);
  }
}

export class OrderCancelled__Params {
  _event: OrderCancelled;

  constructor(event: OrderCancelled) {
    this._event = event;
  }

  get _key(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _inputToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _witness(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class OrderExecuted extends EthereumEvent {
  get params(): OrderExecuted__Params {
    return new OrderExecuted__Params(this);
  }
}

export class OrderExecuted__Params {
  _event: OrderExecuted;

  constructor(event: OrderExecuted) {
    this._event = event;
  }

  get _key(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _inputToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _witness(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get _auxData(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get _bought(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class HyperLimit__decodeOrderResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: Bytes;
  value5: Bytes;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: Bytes,
    value5: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromAddress(this.value2));
    map.set("value3", EthereumValue.fromAddress(this.value3));
    map.set("value4", EthereumValue.fromBytes(this.value4));
    map.set("value5", EthereumValue.fromFixedBytes(this.value5));
    return map;
  }
}

export class HyperLimit extends SmartContract {
  static bind(address: Address): HyperLimit {
    return new HyperLimit("HyperLimit", address);
  }

  ETH_ADDRESS(): Address {
    let result = super.call("ETH_ADDRESS", []);

    return result[0].toAddress();
  }

  try_ETH_ADDRESS(): CallResult<Address> {
    let result = super.tryCall("ETH_ADDRESS", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  canExecuteOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _auxData: Bytes
  ): boolean {
    let result = super.call("canExecuteOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data),
      EthereumValue.fromBytes(_auxData)
    ]);

    return result[0].toBoolean();
  }

  try_canExecuteOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _auxData: Bytes
  ): CallResult<boolean> {
    let result = super.tryCall("canExecuteOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data),
      EthereumValue.fromBytes(_auxData)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  decodeOrder(_data: Bytes): HyperLimit__decodeOrderResult {
    let result = super.call("decodeOrder", [EthereumValue.fromBytes(_data)]);

    return new HyperLimit__decodeOrderResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBytes(),
      result[5].toBytes()
    );
  }

  try_decodeOrder(_data: Bytes): CallResult<HyperLimit__decodeOrderResult> {
    let result = super.tryCall("decodeOrder", [EthereumValue.fromBytes(_data)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new HyperLimit__decodeOrderResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBytes(),
        value[5].toBytes()
      )
    );
  }

  encodeEthOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes
  ): Bytes {
    let result = super.call("encodeEthOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data),
      EthereumValue.fromFixedBytes(_secret)
    ]);

    return result[0].toBytes();
  }

  try_encodeEthOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes
  ): CallResult<Bytes> {
    let result = super.tryCall("encodeEthOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data),
      EthereumValue.fromFixedBytes(_secret)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  encodeTokenOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes,
    _amount: BigInt
  ): Bytes {
    let result = super.call("encodeTokenOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data),
      EthereumValue.fromFixedBytes(_secret),
      EthereumValue.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBytes();
  }

  try_encodeTokenOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes,
    _amount: BigInt
  ): CallResult<Bytes> {
    let result = super.tryCall("encodeTokenOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data),
      EthereumValue.fromFixedBytes(_secret),
      EthereumValue.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  ethDeposits(param0: Bytes): BigInt {
    let result = super.call("ethDeposits", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_ethDeposits(param0: Bytes): CallResult<BigInt> {
    let result = super.tryCall("ethDeposits", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  existOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes
  ): boolean {
    let result = super.call("existOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data)
    ]);

    return result[0].toBoolean();
  }

  try_existOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes
  ): CallResult<boolean> {
    let result = super.tryCall("existOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  keyOf(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes
  ): Bytes {
    let result = super.call("keyOf", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data)
    ]);

    return result[0].toBytes();
  }

  try_keyOf(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes
  ): CallResult<Bytes> {
    let result = super.tryCall("keyOf", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  vaultOfOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes
  ): Address {
    let result = super.call("vaultOfOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data)
    ]);

    return result[0].toAddress();
  }

  try_vaultOfOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes
  ): CallResult<Address> {
    let result = super.tryCall("vaultOfOrder", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromAddress(_inputToken),
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_witness),
      EthereumValue.fromBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class CancelOrderCall extends EthereumCall {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _inputToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _witness(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class DepositEthCall extends EthereumCall {
  get inputs(): DepositEthCall__Inputs {
    return new DepositEthCall__Inputs(this);
  }

  get outputs(): DepositEthCall__Outputs {
    return new DepositEthCall__Outputs(this);
  }
}

export class DepositEthCall__Inputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }

  get _data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DepositEthCall__Outputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }
}

export class ExecuteOrderCall extends EthereumCall {
  get inputs(): ExecuteOrderCall__Inputs {
    return new ExecuteOrderCall__Inputs(this);
  }

  get outputs(): ExecuteOrderCall__Outputs {
    return new ExecuteOrderCall__Outputs(this);
  }
}

export class ExecuteOrderCall__Inputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _inputToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _witnesses(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _auxData(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class ExecuteOrderCall__Outputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }
}
