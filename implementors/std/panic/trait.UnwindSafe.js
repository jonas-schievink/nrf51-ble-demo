(function() {var implementors = {};
implementors["rubble"] = [{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Handle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HandleRange","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; UnwindSafe for AttributeServer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; !UnwindSafe for AttributeServerTx&lt;'a, A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; UnwindSafe for Attribute&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NoAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AttUuid","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Beacon","synthetic":true,"types":[]},{"text":"impl&lt;C, F&gt; UnwindSafe for BeaconScanner&lt;C, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; UnwindSafe for BytesOr&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ByteWriter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ByteReader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for P256Provider","synthetic":true,"types":[]},{"text":"impl UnwindSafe for P256SecretKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RingProvider","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RingSecretKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PublicKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SharedSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InvalidPublicKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BatteryServiceAttrs","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MidiServiceAttrs","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Properties","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BatteryLevel","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Appearance","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Channel","synthetic":true,"types":[]},{"text":"impl&lt;'a, P&gt; !UnwindSafe for ChannelData&lt;'a, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; UnwindSafe for BleChannelMap&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; UnwindSafe for L2CAPState&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Sender&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, M, P&gt; !UnwindSafe for L2CAPStateTx&lt;'a, M, P&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CompanyId","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; UnwindSafe for Connection&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Consumer: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Producer: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeviceAddress","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FeatureSet","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; UnwindSafe for Responder&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::ChannelMapper: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Consumer: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::PacketQueue: PacketQueue,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Producer: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; UnwindSafe for LinkLayer&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Consumer: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::PacketQueue: PacketQueue,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as Config&gt;::PacketQueue as PacketQueue&gt;::Producer: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Config&gt;::Timer: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AddressKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NextUpdate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RadioCmd","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for ServiceUuids&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Flags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for AdStructure&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConnectRequestData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PduBuf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Pdu&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SleepClockAccuracy","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PduType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Llid","synthetic":true,"types":[]},{"text":"impl&lt;'a, L&gt; UnwindSafe for Pdu&lt;'a, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AllowAll","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; UnwindSafe for WhitelistFilter&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, C&gt; UnwindSafe for AdvFilter&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for ScanFilter&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConnectionParamRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConnectionUpdateData","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ControlPdu&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ControlOpcode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VersionNumber","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Consume&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SimpleQueue","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for SimpleProducer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for SimpleConsumer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AdvertisingChannel","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataChannel","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NoSecurity","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SecureConnections","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for SecurityManager&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AuthReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyDistribution","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IoCapabilities","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BondingType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Duration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Instant","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Uuid16","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Uuid32","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Uuid128","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UuidKind","synthetic":true,"types":[]}];
implementors["rubble_nrf5x"] = [{"text":"impl !UnwindSafe for BleRadio","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for BleTimer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for StampSource&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()