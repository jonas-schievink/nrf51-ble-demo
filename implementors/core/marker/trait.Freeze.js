(function() {var implementors = {};
implementors["rubble"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Handle","synthetic":true,"types":[]},{"text":"impl Freeze for HandleRange","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for AttributeServer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; Freeze for AttributeServerTx&lt;'a, A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Freeze for Attribute&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for NoAttributes","synthetic":true,"types":[]},{"text":"impl Freeze for AttUuid","synthetic":true,"types":[]},{"text":"impl Freeze for Beacon","synthetic":true,"types":[]},{"text":"impl&lt;C, F&gt; Freeze for BeaconScanner&lt;C, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Freeze for BytesOr&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ByteWriter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ByteReader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for P256Provider","synthetic":true,"types":[]},{"text":"impl Freeze for P256SecretKey","synthetic":true,"types":[]},{"text":"impl Freeze for RingProvider","synthetic":true,"types":[]},{"text":"impl Freeze for RingSecretKey","synthetic":true,"types":[]},{"text":"impl Freeze for PublicKey","synthetic":true,"types":[]},{"text":"impl Freeze for SharedSecret","synthetic":true,"types":[]},{"text":"impl Freeze for InvalidPublicKey","synthetic":true,"types":[]},{"text":"impl Freeze for BatteryServiceAttrs","synthetic":true,"types":[]},{"text":"impl Freeze for MidiServiceAttrs","synthetic":true,"types":[]},{"text":"impl Freeze for Properties","synthetic":true,"types":[]},{"text":"impl Freeze for BatteryLevel","synthetic":true,"types":[]},{"text":"impl Freeze for Appearance","synthetic":true,"types":[]},{"text":"impl Freeze for Channel","synthetic":true,"types":[]},{"text":"impl&lt;'a, P:&nbsp;?Sized&gt; Freeze for ChannelData&lt;'a, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; Freeze for BleChannelMap&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Freeze for L2CAPState&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Sender&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, M, P&gt; Freeze for L2CAPStateTx&lt;'a, M, P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for CompanyId","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Freeze for Connection&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Consumer: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Producer: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for DeviceAddress","synthetic":true,"types":[]},{"text":"impl Freeze for FeatureSet","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Freeze for Responder&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::ChannelMapper: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Consumer: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::PacketQueue: PacketQueue,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Producer: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Freeze for LinkLayer&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Consumer: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::PacketQueue: PacketQueue,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Producer: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::Timer: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Cmd","synthetic":true,"types":[]},{"text":"impl Freeze for AddressKind","synthetic":true,"types":[]},{"text":"impl Freeze for NextUpdate","synthetic":true,"types":[]},{"text":"impl Freeze for RadioCmd","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for ServiceUuids&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Flags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for AdStructure&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectRequestData","synthetic":true,"types":[]},{"text":"impl Freeze for PduBuf","synthetic":true,"types":[]},{"text":"impl Freeze for Header","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Pdu&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SleepClockAccuracy","synthetic":true,"types":[]},{"text":"impl Freeze for PduType","synthetic":true,"types":[]},{"text":"impl Freeze for Header","synthetic":true,"types":[]},{"text":"impl Freeze for Llid","synthetic":true,"types":[]},{"text":"impl&lt;'a, L&gt; Freeze for Pdu&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for AllowAll","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; Freeze for WhitelistFilter&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, C&gt; Freeze for AdvFilter&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for ScanFilter&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectionParamRequest","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectionUpdateData","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ControlPdu&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ControlOpcode","synthetic":true,"types":[]},{"text":"impl Freeze for VersionNumber","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Consume&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Freeze for SimpleQueue","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for SimpleProducer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for SimpleConsumer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for AdvertisingChannel","synthetic":true,"types":[]},{"text":"impl Freeze for DataChannel","synthetic":true,"types":[]},{"text":"impl Freeze for NoSecurity","synthetic":true,"types":[]},{"text":"impl Freeze for SecureConnections","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for SecurityManager&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for AuthReq","synthetic":true,"types":[]},{"text":"impl Freeze for KeyDistribution","synthetic":true,"types":[]},{"text":"impl Freeze for IoCapabilities","synthetic":true,"types":[]},{"text":"impl Freeze for BondingType","synthetic":true,"types":[]},{"text":"impl Freeze for Duration","synthetic":true,"types":[]},{"text":"impl Freeze for Instant","synthetic":true,"types":[]},{"text":"impl Freeze for Uuid16","synthetic":true,"types":[]},{"text":"impl Freeze for Uuid32","synthetic":true,"types":[]},{"text":"impl Freeze for Uuid128","synthetic":true,"types":[]},{"text":"impl Freeze for UuidKind","synthetic":true,"types":[]}];
implementors["rubble_nrf5x"] = [{"text":"impl Freeze for BleRadio","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for BleTimer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for StampSource&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()